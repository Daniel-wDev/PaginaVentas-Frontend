import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUser } from '../api/user.api';

export function UserForm({ onUserAdded }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async data => {
    try {
      setLoading(true);
      const res = await createUser(data);
      onUserAdded(res.data);
      reset();
    } catch (error) {
      console.error('Error al agregar el usuario:', error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className='row'>
      <div className='col'>
        <div className="card card-small">
          <div className="card-header">
            <h6 className="m-0">Usuarios</h6>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className='row g-3'>
                <div className='col'>
                  <input 
                    type="text" 
                    name="username" 
                    placeholder='Nombre del Usuario' 
                    className='form-control' 
                    {...register("username", { required: true })} 
                  />
                  {errors.nombre_usuario && <span className="text-danger">Campo requerido</span>}
                </div>
                <div className='col'>
                  <input 
                    type="text" 
                    name="password" 
                    placeholder='Contraseña' 
                    className='form-control' 
                    {...register("password", { required: true })} 
                  />
                  {errors.nombre_usuario && <span className="text-danger">Campo requerido</span>}
                </div>
                <div className='col'>
                  <input 
                    type="text" 
                    name="role" 
                    placeholder='Rol' 
                    className='form-control' 
                    {...register("role", { required: true })} 
                  />
                  {errors.cargo_usuario && <span className="text-danger">Campo requerido</span>}
                </div>
                <div className='col'>
                  <input 
                    type="number" 
                    name="phone" 
                    placeholder='Telefono del Usuario' 
                    className='form-control' 
                    {...register("phone", { required: false })} 
                  />
                  {errors.telefono_usuario && <span className="text-danger">Campo requerido</span>}
                </div>
                <div className='col'>
                  <button type="submit" className='btn btn-primary' disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
