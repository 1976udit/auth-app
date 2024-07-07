export default function ProfilePage({params} : any){
    return(
        <div className="flex items-center justify-center min-h-screen text-2xl">
            <h1 className="text-white text-3xk">Profile Id : 
                <span className="bg-orange-500 p-2 rounded">{params.id}</span>
                </h1>
        </div>
    )
}