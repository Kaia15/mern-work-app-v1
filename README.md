# mern-work-app-v1
A MERN app allows people to manage their daily tasks with set up alarms and reminders, and send messages to coworkers. JWT authentication is used for users’ logging in and signing up features. Data is stored in MongoDB.

Login-Signup window
![This is an image](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/310702219_660877868668577_5792662330779105371_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=LM-cr2LvbZgAX_aDn9F&_nc_ht=scontent.fosu1-1.fna&oh=03_AVJndHtCRImh5RMuhsSSpB2t2jIz_6k_w5NGS3sQ5_B18Q&oe=63679C9F)

User checked successfully            |  User checked errors
:-------------------------:|:-------------------------:
![](https://scontent.xx.fbcdn.net/v/t1.15752-9/309001554_2629819937152692_5095663044191879828_n.png?stp=dst-png_p403x403&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=xs8anVjN-kUAX8GB0Nh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJTZPKlpXImNfLu0xM4UrwrXCV0okriEVBZ9gxyBTTBYA&oe=63651B2C)  |  ![](https://scontent.xx.fbcdn.net/v/t1.15752-9/309598827_1053561495311641_1900566816124113954_n.png?stp=dst-png_s403x403&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ce6Zzg4PF-YAX92bpe4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLWDQp7iCioh7RmPrvIzDEPzlcH7ixRh8eBgFRIlrwPXg&oe=6364224A)

User login successfully, redirect to Dashboard

![](https://scontent.xx.fbcdn.net/v/t1.15752-9/309009761_680974100059396_7857393654934842049_n.png?stp=dst-png_p403x403&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=yViKEpMyt1wAX_jaaS0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIeABO2mt-QhIey3M_Kri8jZDAEOBf1QCKIXNrZup9Qag&oe=63646F55)

Open message board, this feature uses Socket-io to send messages immediately and all text messages are stored in mongodb.
Message Board            |  Create new box chat | Send message
:-------------------------:|:-------------------------:|:-------------------------:
![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/310708482_5126862644087056_1704720736534515004_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QenFaMMZsWUAX8FWjeC&_nc_ht=scontent.fosu1-1.fna&oh=03_AVL7fuO8_9PSRyt-UREPgglPV296L2CKyLXwAL8V3zBe6Q&oe=63671849)  |  ![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/310454113_919239665701053_1167368207478862259_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=_Zgo623Xrh4AX_PTTi_&_nc_ht=scontent.fosu1-1.fna&oh=03_AVL3xCcL1oDJWQOlE66-vLLl8h_HZDCHZFXtUDxIGxYOBg&oe=6366574A) | ![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/307539696_348762740775465_4881398622318784368_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=JJAD9HvUr8YAX_UbVcF&_nc_ht=scontent.fosu1-1.fna&oh=03_AVJuQsIx24klTra_dk5ooZuIyG9HzdQ7CW3fa6P30Cq4gQ&oe=6367C0F2)

![This is an image](https://scontent.xx.fbcdn.net/v/t1.15752-9/309368444_474016548109884_1815488976222141462_n.png?stp=dst-png_p403x403&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ntEGkyyHB7IAX_MnO9f&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLI3a5q0NF_qnttjtk_4Drl8ypeyCF2v4VhuZmIOFREDw&oe=636538E1)

Add task            |  Edit task
:-------------------------:|:-------------------------:
![](https://scontent.xx.fbcdn.net/v/t1.15752-9/308076620_5487049744708689_3689986425725216159_n.png?stp=dst-png_p403x403&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=vvCfGBjHJ84AX-CBUrB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJHpRfgOsQqYwSAp_HWclnj3t-0_TBxgUhxYp1GpkB-Ow&oe=636592CF) | ![](https://scontent.fosu1-1.fna.fbcdn.net/v/t1.15752-9/309564878_3375112589385519_5748652806549769105_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wkoWHpuWlyoAX9CaZ2D&_nc_ht=scontent.fosu1-1.fna&oh=03_AVKyKVOM7AwWNLacI3RIyhcPse-mC1nBCjC9nlX8WBq_cA&oe=6366B135)

Profile |
:-------------------------:
![](https://scontent.xx.fbcdn.net/v/t1.15752-9/309468150_861127125264994_2393752005167732209_n.png?stp=dst-png_p403x403&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=zjJxfM7NgaEAX8FxbS9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKg66o0dUoNw9aeeMvKULmT7z31wr4kl4aNCFoWEwNEww&oe=63672FC1)
