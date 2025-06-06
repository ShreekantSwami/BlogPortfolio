import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/auth.js";
import axios from "axios";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = useAuthStore((s) => s.login);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/api/blog/admin/login", { username, password });
            login(res.data.token);
            navigate("/admin");
        } catch (err) {
            alert("Invalid login");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <form className="card-body space-y-4" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center">Admin Login</h2>

                    <div className="form-control">
                        <label className="label">Username</label>
                        <input
                            type="text"
                            placeholder="admin"
                            className="input input-bordered"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="input input-bordered"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-control mt-4">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
