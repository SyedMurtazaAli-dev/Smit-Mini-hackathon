import Form from "./auth/form"
export default function signup() {
    return (
        <>
            <div>
                <h1 className=" font-bold text-xl pl-40 pt-10 " >SignUp Page</h1>
                <Form signin={false}/>

            </div>
        </>
    )
}