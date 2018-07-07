CREATE TABLE messages (
  msg text,
  
);

select word, count(*) from (select regexp_split_to_table(lower(msg), '\s') as word from messages) t group by word order by count desc;