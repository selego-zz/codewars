class Test {

  constructor(analizedFunction, functionParams, expected) {
    this.analizedFunction = analizedFunction;
    this.functionParams = functionParams;
    this.expected = expected;
  }

  set test(test) {
    this._test = test;
  }
  get test() {
    return this._test;
  }

  executeTest() {
    this.test = this.analizedFunction(...this.functionParams);
  }
  compare() {
    if (this.expected === this._test) return true;
    return false;
  }
  arrayCompare() {
    if (this.expected.length !== this._test.length) return false;
    this._test.foreach((element, index) => { if (element !== this.expected[index]) return false; });
    return true;
  }
  objectCompare() {
    if (Object.keys(this.expected).length !== Object.keys(this._test).length) return false;
    if (Object.keys(this.expected).length === 0) return true;
    Object.keys(this._test).forEach(key => { if (this._test[key] !== this.expected[key]) return false; });
    return true;
  }
  _obtenerTexto(param) {
    if (typeof param !== "object")
      return param;
    else
      return JSON.stringify(param);
  }
  _construirFrase(passed) {

    return "test: '" + this.functionParams.join(", ") + `', obtenido '${this._obtenerTexto(this.test)}', esperado '${this._obtenerTexto(this.expected)}', test ${passed ? "Passed" : "Failed"}`
  }
  get log() {
    return this._construirFrase(this.compare());
  }
  get log_arrayCompare() {
    return this._construirFrase(this.arrayCompare());
  }
  get log_objectCompare() {
    return this._construirFrase(this.objectCompare());
  }
}
export { Test };