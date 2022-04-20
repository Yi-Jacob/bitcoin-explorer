insert into "users" ("userId", "username","hashedPassword")

values (1, 'test', 'test');

insert into "bookmarks" ("bookmarkId", "userId", "walletAddress", "data", "bookmarkedAt")

values (1, 1, '1KbrSKrT3GeEruTuuYYUSQ35JwKbrAWJYm', '{"a": "aa"}', '2019-03-01 00:00:01-06'), (2, 1, '1BAFWQhH9pNkz3mZDQ1tWrtKkSHVCkc3fV', '{"b": "bb"}', '2022-03-01 00:00:01-06')

returning *;
