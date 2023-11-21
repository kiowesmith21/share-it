package dev.kiowe.shareit;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping
    public ResponseEntity<Post> createPost(
            @RequestParam("userName") String userName,
            @RequestParam("postBody") String postBody,
            @RequestParam("file") MultipartFile file) {

        try {
            return new ResponseEntity<>(postService.createPost(userName, postBody, file), HttpStatus.CREATED);
        } catch (IOException e) {
            // Handle the exception appropriately, e.g., log it and return an error response
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Post>> getPost(@PathVariable ObjectId id) {
        return new ResponseEntity<>(postService.getPost(id), HttpStatus.OK);
    }
}
