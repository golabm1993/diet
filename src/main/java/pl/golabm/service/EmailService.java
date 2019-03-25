package pl.golabm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender emailSender;

    @Autowired
    EmailService(final JavaMailSender emailSender) {
        this.emailSender = emailSender;
    }

    public void sendSimpleMessage(final String to) {
        final SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(to);
        simpleMailMessage.setSubject("Diet Reminder");
        simpleMailMessage.setText("Hello, you haven't add food today. Bye.");
        emailSender.send(simpleMailMessage);
    }
}
