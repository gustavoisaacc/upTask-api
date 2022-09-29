import User from '../models/User.js'
import generateId from '../helpers/generateID.js';
import generateJWT from '../helpers/generateJWT.js';


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
        const userExit = await usuario.save()
        res.json(userExit)
    } catch (error) {
        console.log("🚀 ~ file: userControllers.js ~ line 5 ~ registrar ~ error", error)
    }
}

export const autenticar =async (req, res) => {
     const {email, password} = req.body;
     
     //comprobar si el usuario esta reguistrado
     const usuario = await User.findOne({ email })
     if(!usuario){
        const error = new Error("Usuario no reguistrado")
        return res.status(404).json({ msg: error.message })
     }
     
     //comprobar si el usuario esta comprobado
     if(!usuario.confirmado){
        const error = new Error("Tu cuenta no fue confirmada")
        return res.status(403).json({ msg: error.message })
     }

     //comprobar password
     if (await usuario.comprobarPassword(password)) {
        res.json({
          _id: usuario._id,
          nombre: usuario.nombre,
          email: usuario.email,
          token: generateJWT(usuario._id)
        });
      } else {
        const error = new Error("El Password es Incorrecto");
        return res.status(403).json({ msg: error.message });
      }
};

export const confirmar = async (req, res) => {
  const { token } = req.params;
  const confirmarUsuario = await User.findOne({token})
  if(!confirmarUsuario){
    const error = new Error("Token no valido");
    return res.status(403).json({ msg: error.message });
  }
  try {
    confirmarUsuario.confirmado = true;
    confirmarUsuario.token = '';
    await confirmarUsuario.save()
    res.json({msg: 'Usuario confirmado correcamente'})

  } catch (error) {
    console.log("🚀 ~ file: userControllers.js ~ line 65 ~ confirmar ~ error", error)
    
  }
}
