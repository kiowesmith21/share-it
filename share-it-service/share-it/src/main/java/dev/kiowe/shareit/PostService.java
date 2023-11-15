package dev.kiowe.shareit;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Post createPost(String userName, String postBody, String img) {
        Post post = postRepository.insert(new Post(postBody, img));

        mongoTemplate.update(User.class)
                .matching(Criteria.where("userName").is(userName))
                .apply(new Update().push("postIds").value(post))
                .first();

        return post;
    }

    public Optional<Post> getPost(ObjectId id) {
        return postRepository.findById(id);
    }

}
