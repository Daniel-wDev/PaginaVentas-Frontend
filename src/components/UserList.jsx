import React from 'react';

export function UserList({ users, handleDelete }) {
  return (
    <div className='row'>
      <div className='col'>
        <div className="card mb-4">
          <div className="card-header border-bottom">
            <h6 className="m-0">Lista de Usuarios</h6>
          </div>
          <div className="card-body p-0 pb-3">
            <div className='container-fluid'>
              <table className="table table-striped table-bordered mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope='col'>Nombre Usuario</th>
                    <th scope='col'>Rol</th>
                    <th scope='col'>Telefono</th>
                    <th scope='col'>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {users && users.map(user => (
                    <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.role}</td>
                      <td>{user.phone}</td>
                      <td>
                        <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger'>Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
