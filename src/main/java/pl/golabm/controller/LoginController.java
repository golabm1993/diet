//package pl.golabm.controller;
//
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/user")
//public class LoginController {
//
//    @GetMapping
//    public String userData() {
//        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        DefaultOidcUser defaultOidcUser = (DefaultOidcUser) authentication.getPrincipal();
//        return defaultOidcUser.getFullName();
//    }
//}
