

CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contact_number VARCHAR(15),
    mail_id VARCHAR(100) NOT NULL,
    subject VARCHAR(255),
    how_can_help TEXT
);
