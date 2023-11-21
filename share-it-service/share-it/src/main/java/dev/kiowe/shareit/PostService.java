package dev.kiowe.shareit;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Post createPost(String userName, String postBody, MultipartFile file) throws IOException {
        // Save the file and get the URL
        String imgUrl = saveFile(file);

        // Create a new post
        Post post = postRepository.insert(new Post(postBody, imgUrl, userName));

        // Update the user with the new post ID
        mongoTemplate.update(User.class)
                .matching(Criteria.where("userName").is(userName))
                .apply(new Update().push("postIds").value(post.getId()))
                .first();

        return post;
    }

    public Optional<Post> getPost(ObjectId id) {
        return postRepository.findById(id);
    }

    private String saveFile(MultipartFile file) throws IOException {
        // Save the file to a location (e.g., uploads folder)
        String fileName = file.getOriginalFilename();
        Path path = Path.of("uploads", fileName);
        Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);

        // Generate the image URL
        return "http://localhost:8080/uploads/" + fileName;
    }
}
