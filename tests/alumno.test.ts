import { Alumno } from "../src/core/entities/Alumno";
describe("Alumno", () => {
  test("debe validar saldo suficiente", () => {
    const alumno = new Alumno("1", "Aaron", 100);

    expect(alumno.tieneSaldoSuficiente(50)).toBe(true);
    expect(alumno.tieneSaldoSuficiente(150)).toBe(false);
  });

  test("debe descontar saldo correctamente", () => {
    const alumno = new Alumno("1", "Aaron", 100);

    alumno.descontarSaldo(50);
    expect(alumno.getSaldo()).toBe(50);
  });

  test("debe lanzar error si no hay saldo suficiente", () => {
    const alumno = new Alumno("1", "Aaron", 100);

    expect(() => alumno.descontarSaldo(200)).toThrow("Saldo insuficiente");
  });
});