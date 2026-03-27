import { Alumno } from "../entities/Alumno";
import { AlumnoRepository } from "../../infrastructure/repositories/AlumnoRepository";

export class RealizarCompra {
  constructor(private alumnoRepo: AlumnoRepository) {}

  ejecutar(alumnoId: string, monto: number): void {
    const alumno = this.alumnoRepo.buscarPorId(alumnoId);

    if (!alumno) {
      throw new Error("Alumno no encontrado");
    }

    alumno.descontarSaldo(monto);

    this.alumnoRepo.guardar(alumno);
  }
}