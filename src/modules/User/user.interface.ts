

export interface IUser{
id : string;
role : string;
password : string;
email ?: string;
name : {
    firstName : string;
    middleName?:string;
    lastName  : string;
};
dateaOfBirth ?:string;
gender : "male" | "female";

contactNo : string;
emergencyContactNo ?: string;
presentAddress : string;
permanentAddress : string;


}
