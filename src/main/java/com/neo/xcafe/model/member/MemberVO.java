package com.neo.xcafe.model.member;

// #0024 : Join 을 통한 DB 호출 글쓰기
// 필드 추가 id
public class MemberVO {
    private int id;
    private String userId;
    private String userName;
    private String email;
    private String phone;
    private String password;

    public MemberVO() {
        super();
    }

    public MemberVO(int id,String userId, String password) {
        this.id = id;
        this.userName = userId;
        this.password = password;
    }

    public MemberVO(int id,String userId, String userName, String email, String phone, String password) {
        this.id = id;
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "MemberVO{" +
                "id=" + id +
                ", userId='" + userId + '\'' +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

