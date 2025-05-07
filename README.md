# Lab 5 - Starter

Min Aung Paing


1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, I would not use a unit test to test the “message” feature of a messaging application. This feature involves multiple components, such as the user interface, network communication, and backend processing. Testing this feature would require integration or end-to-end testing to ensure all parts of the system work together correctly.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would use a unit test to test the “max message length” feature. This feature is a self-contained logic that enforces a character limit, making it suitable for unit testing. A unit test can verify that the feature correctly prevents users from typing more than 80 characters and allows messages within the limit.