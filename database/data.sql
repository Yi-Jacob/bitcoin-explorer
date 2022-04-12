insert into "users" ("userId", "username","hashedPassword")

values (1, 'test', 'test'), (2, 'test2', 'test2');

insert into "bookmarks" ("bookmarkId", "userId", "walletAddress", "data", "bookmarkedAt")

values (1, 1, '34ioBC4EZUM6W1PoGpp4Z3NgpxChnuP4oz', '{"a": "aa"}', '2019-03-01 00:00:01-06'), (2, 2, '3Bs39s2zNpoTU6sbUTaKXdaU8PuPXm2koN', '{"b": "bb"}', '2022-03-01 00:00:01-06')

returning *;
