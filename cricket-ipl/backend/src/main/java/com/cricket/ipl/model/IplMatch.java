package com.cricket.ipl.model;

public class IplMatch {

    private int matchNumber;
    private String date;
    private String day;
    private String team1;
    private String team2;
    private String time;
    private String venue;
    private String group;

    public IplMatch() {}

    public IplMatch(int matchNumber, String date, String day, String team1, String team2,
                    String time, String venue, String group) {
        this.matchNumber = matchNumber;
        this.date = date;
        this.day = day;
        this.team1 = team1;
        this.team2 = team2;
        this.time = time;
        this.venue = venue;
        this.group = group;
    }

    public int getMatchNumber() { return matchNumber; }
    public void setMatchNumber(int matchNumber) { this.matchNumber = matchNumber; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getDay() { return day; }
    public void setDay(String day) { this.day = day; }

    public String getTeam1() { return team1; }
    public void setTeam1(String team1) { this.team1 = team1; }

    public String getTeam2() { return team2; }
    public void setTeam2(String team2) { this.team2 = team2; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public String getVenue() { return venue; }
    public void setVenue(String venue) { this.venue = venue; }

    public String getGroup() { return group; }
    public void setGroup(String group) { this.group = group; }
}
