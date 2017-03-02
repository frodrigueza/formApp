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
    nombre: 'TERPEL',
    id: 3
  },
  {
    nombre: 'COPEC',
    id: 1
  },
  {
    nombre: 'SHELL',
    id: 2
  }
]

console.log('1. Empleado con más puntos')

const resp1 = Math.max(...empleados.map(emp => emp.puntos));
console.log(resp1);

console.log('2. Empleados ordenados por puntos')

const resp2 = _.sortBy(empleados, ['puntos']);
const resp21 = empleados.sort((a, b) => {
  if (a.puntos < b.puntos) {
    return -1;
  } else if (a.puntos < b.puntos) {
    return 1;
  } else {
    return 0;
  }
});

console.log('3. Empleados ordenados por nombre')

const resp3 = _.sortBy(empleados, ['nombre']);
const resp31 = empleados.sort((a, b) => a.localeCompare(b))

console.log('4. Empresas y sus empleados')

empresas.forEach(empresa => {
  const emps = empleados.filter(emp => emp.idEmpresa === empresa.id);
  console.log(empresa, emps);
});

console.log('5. Empleados con más de 10 puntos')

const resp5 = empleados.filter(emp => emp.puntos > 10);
console.log(resp5);

console.log('6. Empresa con el mayor numero de empleados')

const sorted = empresas.sort((a, b) => {
  const emps1 = empleados.filter(emp => emp.idEmpresa === a.id).length;
  const emps2 = empleados.filter(emp => emp.idEmpresa === b.id).length;

  if (emps1 < emps2) {
    return -1;
  } else if (emps1 > emps2) {
    return 1;
  } else {
    return 0;
  }
});

console.log(sorted[0]);

// const empresas.map(empresa => {
//   const emps = empleados.filter(emp => emp.idEmpresa === empresa.id).length;
//   console.log(empresa, emps);
// });

console.log('7. Agregar nuevo empleado a SHELL')

const addEmployee = emp => {
  const shell = empresa.find(emp => emp.nombre === 'SHELL');
  empleados.push({ ...emp, idEmpresa: shell.id });
}

console.log('8. Promedio de puntuacion')

const points = empleados.map(emp => emp.puntos);
const resp8 = Math.add(...points)) / points.length;

console.log('9. Puntos por empresa')


empresas.forEach(empresa => {
  const points = empleados.filter(emp => emp.idEmpresa === empresa.id).map(emp => emp.points);
  const total = Math.add(...points);
  console.log(empresa, total);
});

