export default function Login() {
    return (
        <div className="flex justify-center items-center">
            <form className="bg-white shadow-md rounded-md p-8">
                <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Contraseña</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300"
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2"
                    >
                        Iniciar sesión
                    </button>
                </div>
                <p className="text-center">
                    ¿No tienes una cuenta? <a href="#">Regístrate</a>
                </p>
            </form>
        </div>
    );
}
