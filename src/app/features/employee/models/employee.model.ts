export interface Employee {
  id: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  managerId: string | null; // Null for the top-level employee
}
