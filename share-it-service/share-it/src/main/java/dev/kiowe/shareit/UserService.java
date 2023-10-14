package dev.kiowe.shareit;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUser(String userName) {
        return userRepository.findUserByUserName(userName);
    }

    public User createUser(String userName, String password) {
        User user = userRepository.insert(new User(userName, password));

        mongoTemplate.update(User.class)
                .apply(new Update().push("user").value(user))
                .first();

        return user;
    }

}
