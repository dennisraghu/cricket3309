package com.cricket.ipl.service;

import com.cricket.ipl.model.IplMatch;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class IplScheduleService {

    private final List<IplMatch> schedule;
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    public IplScheduleService() {
        this.schedule = buildSchedule();
    }

    public List<IplMatch> getFullSchedule() {
        return schedule;
    }

    public List<IplMatch> getMatchesByDate(String date) {
        return schedule.stream()
                .filter(m -> m.getDate().equals(date))
                .collect(Collectors.toList());
    }

    public List<IplMatch> getTomorrowMatches() {
        String tomorrow = LocalDate.now().plusDays(1).format(FORMATTER);
        return getMatchesByDate(tomorrow);
    }

    private List<IplMatch> buildSchedule() {
        List<IplMatch> matches = new ArrayList<>();
        int n = 1;

        matches.add(new IplMatch(n++, "2026-03-28", "Sat", "Royal Challengers Bengaluru", "Sunrisers Hyderabad", "7:30 PM IST", "M. Chinnaswamy Stadium, Bengaluru", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-03-29", "Sun", "Mumbai Indians", "Kolkata Knight Riders", "7:30 PM IST", "Wankhede Stadium, Mumbai", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-03-30", "Mon", "Rajasthan Royals", "Chennai Super Kings", "7:30 PM IST", "Sawai Mansingh Stadium, Jaipur", "Group A"));
        matches.add(new IplMatch(n++, "2026-03-31", "Tue", "Punjab Kings", "Gujarat Titans", "7:30 PM IST", "IS Bindra Stadium, Mohali", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-01", "Wed", "Lucknow Super Giants", "Delhi Capitals", "7:30 PM IST", "BRSABV Ekana Stadium, Lucknow", "Group B"));
        matches.add(new IplMatch(n++, "2026-04-02", "Thu", "Kolkata Knight Riders", "Sunrisers Hyderabad", "7:30 PM IST", "Eden Gardens, Kolkata", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-03", "Fri", "Chennai Super Kings", "Punjab Kings", "7:30 PM IST", "MA Chidambaram Stadium, Chennai", "Group A"));
        matches.add(new IplMatch(n++, "2026-04-04", "Sat", "Delhi Capitals", "Mumbai Indians", "3:30 PM IST", "Arun Jaitley Stadium, Delhi", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-04", "Sat", "Gujarat Titans", "Rajasthan Royals", "7:30 PM IST", "Narendra Modi Stadium, Ahmedabad", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-05", "Sun", "Sunrisers Hyderabad", "Lucknow Super Giants", "3:30 PM IST", "Rajiv Gandhi Intl Stadium, Hyderabad", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-05", "Sun", "Royal Challengers Bengaluru", "Chennai Super Kings", "7:30 PM IST", "M. Chinnaswamy Stadium, Bengaluru", "Group A"));
        matches.add(new IplMatch(n++, "2026-04-06", "Mon", "Kolkata Knight Riders", "Punjab Kings", "7:30 PM IST", "Eden Gardens, Kolkata", "Group A"));
        matches.add(new IplMatch(n++, "2026-04-07", "Tue", "Rajasthan Royals", "Mumbai Indians", "7:30 PM IST", "Sawai Mansingh Stadium, Jaipur", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-08", "Wed", "Delhi Capitals", "Gujarat Titans", "7:30 PM IST", "Arun Jaitley Stadium, Delhi", "Group B"));
        matches.add(new IplMatch(n++, "2026-04-09", "Thu", "Kolkata Knight Riders", "Lucknow Super Giants", "7:30 PM IST", "Eden Gardens, Kolkata", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-10", "Fri", "Rajasthan Royals", "Royal Challengers Bengaluru", "7:30 PM IST", "Sawai Mansingh Stadium, Jaipur", "Group A"));
        matches.add(new IplMatch(n++, "2026-04-11", "Sat", "Punjab Kings", "Sunrisers Hyderabad", "3:30 PM IST", "IS Bindra Stadium, Mohali", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-11", "Sat", "Chennai Super Kings", "Delhi Capitals", "7:30 PM IST", "MA Chidambaram Stadium, Chennai", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-12", "Sun", "Lucknow Super Giants", "Gujarat Titans", "3:30 PM IST", "BRSABV Ekana Stadium, Lucknow", "Group B"));
        matches.add(new IplMatch(n++, "2026-04-12", "Sun", "Mumbai Indians", "Royal Challengers Bengaluru", "7:30 PM IST", "Wankhede Stadium, Mumbai", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-13", "Mon", "Sunrisers Hyderabad", "Rajasthan Royals", "7:30 PM IST", "Rajiv Gandhi Intl Stadium, Hyderabad", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-14", "Tue", "Chennai Super Kings", "Kolkata Knight Riders", "7:30 PM IST", "MA Chidambaram Stadium, Chennai", "Group A"));
        matches.add(new IplMatch(n++, "2026-04-15", "Wed", "Royal Challengers Bengaluru", "Lucknow Super Giants", "7:30 PM IST", "M. Chinnaswamy Stadium, Bengaluru", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-16", "Thu", "Mumbai Indians", "Punjab Kings", "7:30 PM IST", "Wankhede Stadium, Mumbai", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-17", "Fri", "Gujarat Titans", "Kolkata Knight Riders", "7:30 PM IST", "Narendra Modi Stadium, Ahmedabad", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-18", "Sat", "Royal Challengers Bengaluru", "Delhi Capitals", "3:30 PM IST", "M. Chinnaswamy Stadium, Bengaluru", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-18", "Sat", "Sunrisers Hyderabad", "Chennai Super Kings", "7:30 PM IST", "Rajiv Gandhi Intl Stadium, Hyderabad", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-19", "Sun", "Kolkata Knight Riders", "Rajasthan Royals", "3:30 PM IST", "Eden Gardens, Kolkata", "Group A"));
        matches.add(new IplMatch(n++, "2026-04-19", "Sun", "Punjab Kings", "Lucknow Super Giants", "7:30 PM IST", "IS Bindra Stadium, Mohali", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-20", "Mon", "Gujarat Titans", "Mumbai Indians", "7:30 PM IST", "Narendra Modi Stadium, Ahmedabad", "Group B"));
        matches.add(new IplMatch(n++, "2026-04-21", "Tue", "Sunrisers Hyderabad", "Delhi Capitals", "7:30 PM IST", "Rajiv Gandhi Intl Stadium, Hyderabad", "Group B"));
        matches.add(new IplMatch(n++, "2026-04-22", "Wed", "Lucknow Super Giants", "Rajasthan Royals", "7:30 PM IST", "BRSABV Ekana Stadium, Lucknow", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-23", "Thu", "Chennai Super Kings", "Mumbai Indians", "7:30 PM IST", "MA Chidambaram Stadium, Chennai", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-24", "Fri", "Punjab Kings", "Royal Challengers Bengaluru", "7:30 PM IST", "IS Bindra Stadium, Mohali", "Group A"));
        matches.add(new IplMatch(n++, "2026-04-25", "Sat", "Delhi Capitals", "Kolkata Knight Riders", "3:30 PM IST", "Arun Jaitley Stadium, Delhi", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-25", "Sat", "Gujarat Titans", "Sunrisers Hyderabad", "7:30 PM IST", "Narendra Modi Stadium, Ahmedabad", "Group B"));
        matches.add(new IplMatch(n++, "2026-04-26", "Sun", "Rajasthan Royals", "Punjab Kings", "3:30 PM IST", "Sawai Mansingh Stadium, Jaipur", "Group A"));
        matches.add(new IplMatch(n++, "2026-04-26", "Sun", "Lucknow Super Giants", "Mumbai Indians", "7:30 PM IST", "BRSABV Ekana Stadium, Lucknow", "Group B"));
        matches.add(new IplMatch(n++, "2026-04-27", "Mon", "Royal Challengers Bengaluru", "Gujarat Titans", "7:30 PM IST", "M. Chinnaswamy Stadium, Bengaluru", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-28", "Tue", "Delhi Capitals", "Chennai Super Kings", "7:30 PM IST", "Arun Jaitley Stadium, Delhi", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-29", "Wed", "Sunrisers Hyderabad", "Punjab Kings", "7:30 PM IST", "Rajiv Gandhi Intl Stadium, Hyderabad", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-04-30", "Thu", "Mumbai Indians", "Rajasthan Royals", "7:30 PM IST", "Wankhede Stadium, Mumbai", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-01", "Fri", "Kolkata Knight Riders", "Delhi Capitals", "7:30 PM IST", "Eden Gardens, Kolkata", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-02", "Sat", "Chennai Super Kings", "Lucknow Super Giants", "3:30 PM IST", "MA Chidambaram Stadium, Chennai", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-02", "Sat", "Gujarat Titans", "Royal Challengers Bengaluru", "7:30 PM IST", "Narendra Modi Stadium, Ahmedabad", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-03", "Sun", "Mumbai Indians", "Sunrisers Hyderabad", "3:30 PM IST", "Wankhede Stadium, Mumbai", "Group B"));
        matches.add(new IplMatch(n++, "2026-05-03", "Sun", "Punjab Kings", "Rajasthan Royals", "7:30 PM IST", "IS Bindra Stadium, Mohali", "Group A"));
        matches.add(new IplMatch(n++, "2026-05-04", "Mon", "Delhi Capitals", "Lucknow Super Giants", "7:30 PM IST", "Arun Jaitley Stadium, Delhi", "Group B"));
        matches.add(new IplMatch(n++, "2026-05-05", "Tue", "Kolkata Knight Riders", "Chennai Super Kings", "7:30 PM IST", "Eden Gardens, Kolkata", "Group A"));
        matches.add(new IplMatch(n++, "2026-05-06", "Wed", "Gujarat Titans", "Punjab Kings", "7:30 PM IST", "Narendra Modi Stadium, Ahmedabad", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-07", "Thu", "Royal Challengers Bengaluru", "Mumbai Indians", "7:30 PM IST", "M. Chinnaswamy Stadium, Bengaluru", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-08", "Fri", "Rajasthan Royals", "Sunrisers Hyderabad", "7:30 PM IST", "Sawai Mansingh Stadium, Jaipur", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-09", "Sat", "Delhi Capitals", "Royal Challengers Bengaluru", "3:30 PM IST", "Arun Jaitley Stadium, Delhi", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-09", "Sat", "Lucknow Super Giants", "Kolkata Knight Riders", "7:30 PM IST", "BRSABV Ekana Stadium, Lucknow", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-10", "Sun", "Chennai Super Kings", "Gujarat Titans", "3:30 PM IST", "MA Chidambaram Stadium, Chennai", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-10", "Sun", "Punjab Kings", "Mumbai Indians", "7:30 PM IST", "IS Bindra Stadium, Mohali", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-11", "Mon", "Rajasthan Royals", "Delhi Capitals", "7:30 PM IST", "Sawai Mansingh Stadium, Jaipur", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-12", "Tue", "Sunrisers Hyderabad", "Kolkata Knight Riders", "7:30 PM IST", "Rajiv Gandhi Intl Stadium, Hyderabad", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-13", "Wed", "Gujarat Titans", "Lucknow Super Giants", "7:30 PM IST", "Narendra Modi Stadium, Ahmedabad", "Group B"));
        matches.add(new IplMatch(n++, "2026-05-14", "Thu", "Mumbai Indians", "Chennai Super Kings", "7:30 PM IST", "Wankhede Stadium, Mumbai", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-15", "Fri", "Royal Challengers Bengaluru", "Rajasthan Royals", "7:30 PM IST", "M. Chinnaswamy Stadium, Bengaluru", "Group A"));
        matches.add(new IplMatch(n++, "2026-05-16", "Sat", "Lucknow Super Giants", "Sunrisers Hyderabad", "3:30 PM IST", "BRSABV Ekana Stadium, Lucknow", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-16", "Sat", "Kolkata Knight Riders", "Gujarat Titans", "7:30 PM IST", "Eden Gardens, Kolkata", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-17", "Sun", "Chennai Super Kings", "Rajasthan Royals", "3:30 PM IST", "MA Chidambaram Stadium, Chennai", "Group A"));
        matches.add(new IplMatch(n++, "2026-05-17", "Sun", "Delhi Capitals", "Punjab Kings", "7:30 PM IST", "Arun Jaitley Stadium, Delhi", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-18", "Mon", "Mumbai Indians", "Gujarat Titans", "7:30 PM IST", "Wankhede Stadium, Mumbai", "Group B"));
        matches.add(new IplMatch(n++, "2026-05-19", "Tue", "Sunrisers Hyderabad", "Royal Challengers Bengaluru", "7:30 PM IST", "Rajiv Gandhi Intl Stadium, Hyderabad", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-20", "Wed", "Punjab Kings", "Kolkata Knight Riders", "7:30 PM IST", "IS Bindra Stadium, Mohali", "Group A"));
        matches.add(new IplMatch(n++, "2026-05-21", "Thu", "Lucknow Super Giants", "Chennai Super Kings", "7:30 PM IST", "BRSABV Ekana Stadium, Lucknow", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-22", "Fri", "Rajasthan Royals", "Gujarat Titans", "7:30 PM IST", "Sawai Mansingh Stadium, Jaipur", "Inter-Group"));
        matches.add(new IplMatch(n++, "2026-05-23", "Sat", "Royal Challengers Bengaluru", "Punjab Kings", "3:30 PM IST", "M. Chinnaswamy Stadium, Bengaluru", "Group A"));
        matches.add(new IplMatch(n++, "2026-05-23", "Sat", "Delhi Capitals", "Sunrisers Hyderabad", "7:30 PM IST", "Arun Jaitley Stadium, Delhi", "Group B"));

        // Playoffs
        matches.add(new IplMatch(n++, "2026-05-26", "Tue", "TBD (1st)", "TBD (2nd)", "7:30 PM IST", "TBD", "Qualifier 1"));
        matches.add(new IplMatch(n++, "2026-05-27", "Wed", "TBD (3rd)", "TBD (4th)", "7:30 PM IST", "TBD", "Eliminator"));
        matches.add(new IplMatch(n++, "2026-05-29", "Fri", "TBD", "TBD", "7:30 PM IST", "TBD", "Qualifier 2"));
        matches.add(new IplMatch(n++, "2026-05-31", "Sun", "TBD", "TBD", "7:30 PM IST", "TBD", "FINAL"));

        return matches;
    }
}
