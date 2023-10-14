package dev.kiowe.shareit;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private ObjectId id;
    private String userName;
    private String password;
    private List<String> following;
    @DocumentReference
    private List<Post> postIds;

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
}
