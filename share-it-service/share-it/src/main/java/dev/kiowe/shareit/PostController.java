package dev.kiowe.shareit;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Map<String, String> payload) {

        return new ResponseEntity<Post>(postService.createPost(payload.get("userName"), payload.get("postBody"), payload.get("img")), HttpStatus.CREATED);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Post>> getPost(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Post>>(postService.getPost(id), HttpStatus.OK);
    }

}
