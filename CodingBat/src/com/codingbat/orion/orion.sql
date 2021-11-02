SELECT user.id, user.fullName, country.name FROM USERS JOIN TABLE COUNTRIES
    ON user.coutry_code = counties.code WHERE (country.code = 17 OR country.code = 0)
 AND user.created_at like "2020-10-10%";
