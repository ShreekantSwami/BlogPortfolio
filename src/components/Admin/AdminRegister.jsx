import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminRegister = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/api/blog/admin/signup", { username, password });
            // navigate("/admin/login");
        } catch (err) {
            alert("Invalid signup");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <form className="card-body space-y-4 flex flex-col items-center gap-4" style={{ padding: '10px' }} onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center">Admin Signup</h2>

                    <div className="form-control flex flex-col items-center w-[80%] gap-2">
                        <label className="label w-full">Username</label>
                        <input
                            type="text"
                            placeholder="admin"
                            className="input input-bordered w-full"
                            style={{ padding: '10px' }}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-control flex flex-col items-center w-[80%] gap-2">
                        <label className="label w-full">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="input input-bordered w-full"
                            style={{ padding: '10px' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-control mt-4">
                        <button type="submit" className="btn btn-primary">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AdminRegister;