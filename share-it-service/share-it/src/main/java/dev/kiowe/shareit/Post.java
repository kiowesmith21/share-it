package dev.kiowe.shareit;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "posts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    private ObjectId id;
    private String body;
    private String img;
    private String userName;

    public Post(String body, String img, String userName) {
        this.body = body;
        this.img = img;
        this.userName = userName;
    }

}
