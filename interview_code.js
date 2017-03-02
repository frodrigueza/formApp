const empleados = [
  {
    nombre: 'Francisco Andres Pinilla Rodriguez',
    rut: '86620855',
    puntos: 4,
    idEmpresa: 1
  },
  {
    nombre: 'Michael Peter Hantke Domas',
    rut: '7317855K',
    puntos: 10,
    idEmpresa: 2
  },
  {
    nombre: 'Carlos Valdovinos Jeldes',
    rut: '73826497',
    puntos: 10,
    idEmpresa: 3
  },
  {
    nombre: 'Sibel Alejandra Villalobos Volpi',
    rut: '88587715',
    puntos: 2,
    idEmpresa: 1
  },
  {
    nombre: 'Roberto Arturo Pasten Carrasco',
    rut: '94020190',
    puntos: 18,
    idEmpresa: 2
  },
  {
    nombre: 'Pablo Octavio Miranda Nigro',
    rut: '99804238',
    puntos: 34,
    idEmpresa: 3
  },
  {
    nombre: 'Rene Luis Velasquez DÍaz',
    rut: '108043733',
    puntos: 2,
    idEmpresa: 1
  },
  {
    nombre: 'Jorge Enrique De La Maza Schleyer',
    rut: '104885322',
    puntos: 2,
    idEmpresa: 2
  },
  {
    nombre: 'Javier Eduardo Millar Silva',
    rut: '107654615',
    puntos: 40,
    idEmpresa: 3
  },
  {
    nombre: 'Monica Catalina Pardo Ocaranza',
    rut: '121621118',
    puntos: 18,
    idEmpresa: 3
  },
  {
    nombre: 'Rodrigo Alexis Sanchez Tello',
    rut: '100480603',
    puntos: 42,
    idEmpresa: 3
  },
  {
    nombre: 'Marisol Torres Alarcon',
    rut: '127427356',
    puntos: 34,
    idEmpresa: 3
  },
  {
    nombre: 'Jacqueline Elizabeth Oliva Alvarado',
    rut: '135203386',
    puntos: 2,
    idEmpresa: 2
  },
  {
    nombre: 'Maria Francisca Henriquez Prieto',
    rut: '142156865',
    puntos: 7,
    idEmpresa: 3
  },
  {
    nombre: 'Felipe Riesco Eyzaguirre',
    rut: '153827222',
    puntos: 10,
    idEmpresa: 2
  },
  {
    nombre: 'Nicolas Alejandro Mahn Mendiburo',
    rut: '161553875',
    puntos: 1,
    idEmpresa: 3
  },
  {
    nombre: 'Evelyn Cecilia Risco Huenchupan',
    rut: '167222978',
    puntos: 34,
    idEmpresa: 3
  },
  {
    nombre: 'Javier Subiabre AÑazco',
    rut: '168719965',
    puntos: 2,
    idEmpresa: 2
  },
  {
    nombre: 'Romina Constanza Ross Picero',
    rut: '177419176',
    puntos: 12,
    idEmpresa: 3
  },
  {
    nombre: 'Jose Alain Hernandez Riera',
    rut: '211428538',
    puntos: 45,
    idEmpresa: 1
  }
]

const empresas = [
  {
    nombre: 'COPEC',
    id: 1
  },
  {
    nombre: 'SHELL',
    id: 2
  },
  {
    nombre: 'TERPEL',
    id: 3
  }
]

console.log('1. Empleado con más puntos')
let mayor = {puntos:0}
empleados.forEach(emp => {
  if(emp.puntos > mayor.puntos) {
    mayor = emp
  }
})
console.log(` ${mayor.nombre}`)


console.log('2. Empleados ordensados por puntos')
let ordenados = empleados.sort((a, b) => {
  return a.puntos - b.puntos
})
console.log(ordenados)
console.log('3. Empleados ordenados por nombre')
ordenados = empleados.sort((a, b) => {
  return a.nombre > b.nombre ? 1 : -1
})
console.log(ordenados)

console.log('4. Empresas y sus empleados')
let fullcompanies = empresas.map(empresa => {
  let empl = empleados.filter(empleado => empleado.idEmpresa === empresa.id)
  empresa.empleados = empl
  return empresa
})


 fullcompanies.map(empresa => {
  console.log('*'+empresa.nombre)
  empresa.empleados.forEach(empleado => {
    if(empleado.idEmpresa === empresa.id)
      console.log(' -'+empleado.nombre)
  })
})

console.log('5. Empleados con más de 10 puntos')
empleados.forEach(empleado => {
  if(empleado.puntos > 10)
    console.log(` ${empleado.nombre} puntos: ${empleado.puntos}`)
})
console.log('6. Empresa con el mayor numero de empleados')
mayor = {empleados: []}
fullcompanies.forEach(empresa => {
  if(empresa.empleados > mayor.empleados)
    mayor = empresa
})
console.log(`   ${mayor.nombre} empleados: ${mayor.empleados.length}`)
console.log('7. Agregar nuevo empleado a SHELL')
empleados.push({
  nombre: 'jose andradez',
  rut: '123456',
  idEmpresa: 2,
  puntos:20

})
let empdeshell = empleados.filter(empleado => empleado.idEmpresa === 2)
console.log(` empleados de shell: `, empdeshell)

console.log('8. Promedio de puntuacion')
let suma = 0
empleados.forEach((a) => {
  suma = suma + a.puntos
})
console.log(suma/empleados.length)
console.log('9. Puntos por empresa')
fullcompanies.forEach(empresa => {
  let suma = 0
  empresa.empleados.forEach(emp =>{
    suma = suma + emp.puntos
  })
  console.log(` ${empresa.nombre} ${suma} puntos`)
})
