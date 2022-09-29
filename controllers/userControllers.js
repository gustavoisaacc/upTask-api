import User from '../models/User.js'
import generateId from '../helpers/generateID.js';


export const registrar = async (req, res) => {
    const {email} = req.body
    const exiteUsuario = await User.findOne({ email })

    if(exiteUsuario){
        const error = new Error("Usuario ya reguistrado")
        return res.status(400).json({ msg: error.message })
    }

    try {
        const usuario = new User(req.body)
        usuario.token = generateId();
        await usuario.save()
        res.json({msg: 'Usuario creado con exito'})
    } catch (error) {
        console.log("🚀 ~ file: userControllers.js ~ line 5 ~ registrar ~ error", error)
    }
}

export const autenticar =async (req, res) => {
     const {email, password} = req.body;
     
     //comprobar si el usuario esta reguistrado
     const usuarioLogiado = await User.findOne({ email })
     if(!usuarioLogiado){
        const error = new Error("Usuario no reguistrado")
        return res.status(404).json({ msg: error.message })
     }
     
     //comprobar si el usuario esta comprobado
     if(!usuarioLogiado.confirmado){
        const error = new Error("Tu cuenta no fue confirmada")
        return res.status(403).json({ msg: error.message })
     }

     //comprobar password
     if (await usuarioLogiado.comprobarPassword(password)) {
        res.json({
          _id: User._id,
          nombre: User.nombre,
          email: User.email,
        });
      } else {
        const error = new Error("El Password es Incorrecto");
        return res.status(403).json({ msg: error.message });
      }
};
