import {con} from './connection.js'

export async function inserirAnime(){
    const comando = `
    insert into TB_anime(Nm_anime) 
    values (?)
    `
    const [resposta] = con.query(comando)
    return resposta
}