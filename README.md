# mern-work-app-v1
A MERN app allows people to manage their daily tasks with set up alarms and reminders, and send messages to coworkers. JWT authentication is used for users’ logging in and signing up features. Data is stored in MongoDB.

Login-Signup window
![This is an image](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/310702219_660877868668577_5792662330779105371_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pYdVoWYzJb4AX_p4fwH&_nc_ht=scontent.fosu1-1.fna&oh=03_AdRx4ujvo439iaGgJPxaTvVqcb3Kyv5fUFVxMrHjtf3Oog&oe=63A2475F)

User checked successfully            |  User checked errors
:-------------------------:|:-------------------------:
![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/309001554_2629819937152692_5095663044191879828_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ShzTGU8qkhMAX8V1OA-&_nc_ht=scontent.fosu1-1.fna&oh=03_AdTHZmHIvd_uE5WHZ92ir80TCpq7UwfJM8azZq-EOyxREA&oe=63A268EC)  |  ![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/309598827_1053561495311641_1900566816124113954_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=_gNtb5a5HHYAX9N7RDm&tn=AKJ0O00bSh89DirR&_nc_ht=scontent.fosu1-1.fna&oh=03_AdRheWZnKcSpCI674vqk8rQaiTJo6zvsOqNxACFUZVccmQ&oe=63A2510A)

User login successfully, redirect to Dashboard

![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/308201875_662679908476933_2536176448551362510_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=m6FcBhzCkDQAX9p0Uet&tn=AKJ0O00bSh89DirR&_nc_ht=scontent.fosu1-1.fna&oh=03_AdSEV9H7zSYJUyQ9-at8ZEhFa_wc1iQXyFCYbe2B94NrDw&oe=63A25E87)

Open message board, this feature uses Socket-io to send messages immediately and all text messages are stored in mongodb.
Message Board            |  Create new box chat | Send message
:-------------------------:|:-------------------------:|:-------------------------:
![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/310708482_5126862644087056_1704720736534515004_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=AR4oZbtpZhYAX-kxr9a&tn=AKJ0O00bSh89DirR&_nc_ht=scontent.fosu1-1.fna&oh=03_AdR439ta6JFCnsXw5hhqlHIVmrR8gaiUHJ1LLQt6oWns_A&oe=63A26BC9)  |  ![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/310454113_919239665701053_1167368207478862259_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wulD2GLPa2MAX-YdKKA&_nc_ht=scontent.fosu1-1.fna&oh=03_AdTyWfnW_LiYoGkZDmHRBAl_g4Wsaum4PCuaKeGmHRUBMw&oe=63A2538A) | ![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/307539696_348762740775465_4881398622318784368_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TXuGwcIwYeUAX8J8Loy&_nc_ht=scontent.fosu1-1.fna&oh=03_AdRpUUM9oqOHADTCU9-Um0beOAKMuqJ4jiIQ0Gf0Z3pI3g&oe=63A26BB2)

![This is an image](https://scontent.xx.fbcdn.net/v/t1.15752-9/309368444_474016548109884_1815488976222141462_n.png?stp=dst-png_p403x403&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ntEGkyyHB7IAX_MnO9f&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLI3a5q0NF_qnttjtk_4Drl8ypeyCF2v4VhuZmIOFREDw&oe=636538E1)

Add task            |  Edit task
:-------------------------:|:-------------------------:
![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/308076620_5487049744708689_3689986425725216159_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=HI-zHsKCVwMAX-8kOzP&_nc_ht=scontent.fosu1-1.fna&oh=03_AdTbs-kgEUI8BRIgT2wd5Ko_-SWIqUcBDHIiidIcaHwjig&oe=63A237CF) | ![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/309564878_3375112589385519_5748652806549769105_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=9XaShHJejnAAX9uMp7b&_nc_ht=scontent.fosu1-1.fna&oh=03_AdTuksV0fnD2midvWThzSyrODRCuC7ahXLHZ6eKBSlVofA&oe=63A23CF5)

Profile |
:-------------------------:
![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/309468150_861127125264994_2393752005167732209_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=SSwS14j8QZ8AX_1Qgrn&_nc_ht=scontent.fosu1-1.fna&oh=03_AdSGQiG9K14MUGZn3FGK1MtGvKaSxUkCZvRVXCWnv4Ju3g&oe=63A24B01)

Edit profile |
:-------------------------:
![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/309748133_5449150435166506_1013328953552960713_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=iPrWnUytulAAX_DIsHk&_nc_ht=scontent.fosu1-1.fna&oh=03_AdSFIznYzw4tT3cbXVmmDj96LgOOM90IEzM2qYJGdEdwKg&oe=63A26931)

However, there are some small errors such as feature not updated when accesstoken is expired. To see the updates, we need to turn back to dashboard and login again to get the token that JWT verifies. I'm trying to fix these mistakes day by day.

