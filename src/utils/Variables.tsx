import { PlaceholderAnimation } from "react-bootstrap/esm/usePlaceholder";

export class Variables {
    static PATIENT_URL = "/patient/";
    static HOME_URL = "/"; 
    static NR_SLASH_PATIENT_ID= 1 + this.PATIENT_URL.split('/').length; // the number of slashes till the patient id in the url

    static SIGNIN_FLOW = 'redirect';

    static PLACEHOLDER_ANIMATION = "glow" as PlaceholderAnimation;
    static LISTGROUP_VARIANT =  "flush" as "flush";

    static TOKEN = "token";
    static ROLE = "role";
    static UID = "uid";
    static THERAPIST_ROLE = "therapist";
    static PATIENT_ROLE = "patient";
    static STUDENT_ROLE = "student";

    static TASKS_TODOS_PER_PAGE = 5;
    static PATIENTS_PER_PAGE = 10;

    // Configure Firebase.
    static FIREBASE_CONFIG = {
            apiKey: "AIzaSyAYzvi0vJVGvD-ISNpoWj8iGlTjdkcCiXw",
            authDomain: "homerev-users.firebaseapp.com",
            projectId: "homerev-users",
            storageBucket: "homerev-users.appspot.com",
            messagingSenderId: "599333584358",   
            appId: "1:599333584358:web:0a969ed395d39b38f06a27"
    };
    static GRAPHQL_URL = 'https://europe-west1-homerev-users.cloudfunctions.net/v1';
}