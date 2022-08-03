const Admin = () => {
  function isTrue() {
    const trueUsername = "admin";
    const truePassword = "alvinoaryo";
    const inputUsername = document.getElementById("username").value.toLowerCase();
    const inputPassword = document.getElementById("password").value.toLowerCase();

    if (trueUsername === inputUsername && truePassword === inputPassword) {
      localStorage.setItem("isAdmin", true);
      window.location.reload()
    } else {
      localStorage.setItem("isAdmin", false);
      window.location.reload()
    }
  }

  return (
    <>
    {localStorage.getItem("isAdmin") === "true" ? (
        <>
            <h1>Admin</h1>
        </>
     ) : (<div className="flex items-center justify-center m-44 rounded">
     <div className="px-8 py-6 mt-4 text-left bg-base-200">
       <h3 className="text-2xl font-bold text-center">
         Login to your account
       </h3>
       <div className="mt-4">
         <div>
           <label className="block">username</label>
           <input
             type="text"
             placeholder="username"
             id="username"
             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black"
           />
         </div>
         <div className="mt-4">
           <label className="block">Password</label>
           <input
             type="password"
             id="password"
             placeholder="Password"
             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black"
           />
         </div>
         <div className="flex items-baseline justify-center">
           <button
             onClick={isTrue}
             className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 w-full transition duration-200"
           >
             Login
           </button>
         </div>
       </div>
     </div>
   </div>
   )}
    </>
  );
};

export default Admin;
