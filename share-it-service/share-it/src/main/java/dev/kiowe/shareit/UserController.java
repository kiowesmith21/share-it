package dev.kiowe.shareit;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<List<User>>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/{userName}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable String userName) {
        return new ResponseEntity<Optional<User>>(userService.getUser(userName), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody Map<String, String> payload) {

        return new ResponseEntity<User>(userService.createUser(payload.get("userName"), payload.get("password")), HttpStatus.CREATED);

    }
}
