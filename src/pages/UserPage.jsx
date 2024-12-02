import { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../api/user.api';
import { UserList } from '../components/UserList';
import { UserForm } from '../components/UserForm';

export function UserPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const res = await getAllUsers();
            setUsers(res.data);
        }
        loadUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            await deleteUser(userId);
            const res = await getAllUsers();
            setUsers(res.data);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleUserAdded = (newUser) => {
        setUsers([...users, newUser]);
    };

    return (
        <>
            <main className="main-content p-0 col-12">
                <div className="main-navbar bg-white sticky-top">
                    <div className="p-0 container-fluid">
                        <nav className="align-items-stretch flex-md-nowrap p-0 navbar navbar-light">
                            {/* Contenido de la barra de navegación */}
                        </nav>
                    </div>
                </div>

                <div className='main-content-container px-4 container-fluid'>
                    <div className="page-header py-4 no-gutters row">
                        <div className="text-left col-12">
                            <span className="text-uppercase page-subtitle">Inventario</span>
                            <h3 className="page-title">Usuarios</h3>
                        </div>
                    </div>

                    <UserForm onUserAdded={handleUserAdded} />
                    <UserList users={users} handleDelete={handleDelete} />
                </div>

                <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
                    <div className="container">
                        <div className="row justify-content-center">
                            <span className="copyright my-auto text-center">Copyright © 2024 dValencia</span>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}
