export default function Register() {
    return (
        <form className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>
            <div className="mb-4">
                <label className="block mb-2">Nombre</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Apellidos</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Contraseña</label>
                <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300"
                    required
                />
            </div>
            <div className="mb-4">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2"
                >
                    Registrarse
                </button>
            </div>
        </form>
    );
}
