package com.cricket.ipl.controller;

import com.cricket.ipl.model.IplMatch;
import com.cricket.ipl.service.IplScheduleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CricketController {

    private final IplScheduleService scheduleService;

    public CricketController(IplScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping("/schedule")
    public List<IplMatch> getFullSchedule() {
        return scheduleService.getFullSchedule();
    }

    @GetMapping("/schedule/tomorrow")
    public List<IplMatch> getTomorrowMatches() {
        return scheduleService.getTomorrowMatches();
    }

    @GetMapping("/schedule/date/{date}")
    public List<IplMatch> getMatchesByDate(@PathVariable String date) {
        return scheduleService.getMatchesByDate(date);
    }
}
