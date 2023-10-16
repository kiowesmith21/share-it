package dev.kiowe.shareit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

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

}
