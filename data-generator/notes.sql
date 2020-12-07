
/* DELETE ALL */
DELETE FROM `records` WHERE 1 = 1;
DELETE FROM `patients` WHERE 1 = 1;
DELETE FROM `nurses` WHERE 1 = 1;
DELETE FROM `physicians` WHERE 1 = 1;
DELETE FROM `employees` WHERE 1 = 1;
DELETE FROM `rooms` WHERE 1 = 1;
DELETE FROM `departments` WHERE 1 = 1;
DELETE FROM `hospitals` WHERE 1 = 1;

/* GET NURSES FROM HOSPITAL */
SELECT * FROM nurses WHERE department_id IN (SELECT department_id FROM departments WHERE hospital_id = 1)

/* GET NURSES FROM HOSPITAL WITH EMPLOYEE INFORMATION */
SELECT * FROM nurses INNER JOIN employees ON nurses.employee_id = employees.employee_id WHERE department_id IN (SELECT department_id FROM departments WHERE hospital_id = 1)

/* GET NURSES FROM HOSPITAL WITH FIRST AND LAST NAME */
SELECT nurses.*, employees.first_name, employees.last_name FROM nurses LEFT JOIN employees ON nurses.employee_id = employees.employee_id WHERE department_id IN (SELECT department_id FROM departments WHERE hospital_id = 1)

/* GET ALL NURSES AND PHYSICIANS FROM HOSPITAL */
SELECT employee_id FROM nurses WHERE department_id IN (SELECT department_id FROM departments WHERE hospital_id = 1)
UNION
SELECT employee_id FROM physicians WHERE department_id IN (SELECT department_id FROM departments WHERE hospital_id = 1)

/* GET ALL EMPLOYEES FROM A HOSPITAL */
SELECT * FROM employees WHERE employee_id IN
(
    SELECT employee_id FROM nurses WHERE department_id IN (SELECT department_id FROM departments WHERE hospital_id = 1)
		UNION
	SELECT employee_id FROM physicians WHERE department_id IN (SELECT department_id FROM departments WHERE hospital_id = 1)
)
