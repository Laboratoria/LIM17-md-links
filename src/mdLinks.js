const apiFunc= require ('./api.js') 

 const mdLinks = (path, option = {}) => {
    return new Promise ((resolve, reject) => {
        const route = apiFunc.absoluteroute(path)
        if(!apiFunc.routeExist(route)){
            reject('Path does not exist');
        } else {
                const validateMdFile= apiFunc.mdRoute(route);
                if (validateMdFile.length === 0 ){
                    reject('There is no md files')
                }
                else{
                    const linksResult =apiFunc.getLinks(route);
                    if(linksResult.length===0){
                        reject('there is no links')
                    }
                    else{
                            if(!(option.validate)){
                                resolve(linksResult);
                            } else {
                                const statusLink = apiFunc.getLinksStatus(linksResult);
                                resolve(statusLink);
                            }
                        }
                }
        }
    });
}
/*const result = mdLinks('C:\\Users\\Usuario\\Documents\\GitHub\\LIM017-md-links\\prueba4.md', { validate: true })
result
.then((res)=> console.log(res))
.catch((err) => console.log(err));*/
    
module.exports= {mdLinks};