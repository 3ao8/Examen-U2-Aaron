import { Alumno } from "../../core/entities/Alumno";
import { AlumnoRepository } from "./AlumnoRepository";

export class MockAlumnoRepository implements AlumnoRepository {
  private alumnos: Alumno[] = [];

  constructor(alumnosIniciales: Alumno[] = []) {
    this.alumnos = alumnosIniciales;
  }

  buscarPorId(id: string): Alumno | null {
    return this.alumnos.find(a => a.id === id) || null;
  }

  guardar(alumno: Alumno): void {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);

    if (index >= 0) {
      this.alumnos[index] = alumno;
    } else {
      this.alumnos.push(alumno);
    }
  }
}