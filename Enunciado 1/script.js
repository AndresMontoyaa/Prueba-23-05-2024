function generarAlerta(genero, hemoglobina) {
 
    const promedioHemoglobina = hemoglobina.reduce((suma, valor) => suma + valor, 0) / hemoglobina.length;
  
  
    let alerta;
    if (genero === 1) {
      if (promedioHemoglobina < 12.2) {
        alerta = "Baja";
      } else if (promedioHemoglobina <= 16.6) {
        alerta = "Normal";
      } else {
        alerta = "Alta";
      }
    } else if (genero === 2) {
      if (promedioHemoglobina < 12.6) {
        alerta = "Baja";
      } else if (promedioHemoglobina <= 15) {
        alerta = "Normal";
      } else {
        alerta = "Alta";
      }
    } else {
      throw new Error("Género no válido");
    }
  
    const resultadoAlerta = [alerta, promedioHemoglobina];
  
    
    return resultadoAlerta;
  }
  
  const genero = 1;
  const hemoglobina = [10.0, 12.0, 11.3, 7.5, 12.3, 12.5, 13.2];
  
  const resultadoAlerta = generarAlerta(genero, hemoglobina);
  
  console.log(resultadoAlerta);