import { Alumno } from "../../core/entities/Alumno";

export interface AlumnoRepository {
  buscarPorId(id: string): Alumno | null;
  guardar(alumno: Alumno): void;
}