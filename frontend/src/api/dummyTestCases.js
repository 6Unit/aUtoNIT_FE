export const dummyTestCases = [
    {
      testcase_id: 'SN-USER-001-01',
      scenario_id: 'SN-USER-001',
      ui_flow: `회원가입 페이지 진입 → 모든 필드에 올바른 정보 입력 → 'Register' 버튼 클릭`,
      test_case_name: `회원가입 성공`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'phone': '1234567890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'Anytown', 'state': 'Anystate', 'country': 'US', 'postal_code': '12345', 'password': 'StrongPassword123!'}`,
      expected_result: `Customer registration`
    },
    {
      testcase_id: 'SN-USER-001-02',
      scenario_id: 'SN-USER-001',
      ui_flow: `회원가입 페이지 진입 → 이메일에 'johndoe.com' 입력 → 나머지 필드에 올바른 정보 입력 → 'Register' 버튼 클릭`,
      test_case_name: `회원가입 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'johndoe.com', 'password': 'StrongPassword123!'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-001-03',
      scenario_id: 'SN-USER-001',
      ui_flow: `회원가입 페이지 진입 → 비밀번호에 'Pass1!' 입력 → 나머지 필드에 올바른 정보 입력 → 'Register' 버튼 클릭`,
      test_case_name: `회원가입 실패 - 비밀번호 길이 부족`,
      input_data: `{'password': 'Pass1!'}`,
      expected_result: `Password must be minimal 6 characters long.`
    },
    {
      testcase_id: 'SN-USER-001-04',
      scenario_id: 'SN-USER-001',
      ui_flow: `회원가입 페이지 진입 → 이메일, 비밀번호 입력 → 나머지 필드 비워둠 → 'Register' 버튼 클릭`,
      test_case_name: `회원가입 실패 - 필수 필드 누락`,
      input_data: `{'email': 'john.doe@example.com', 'password': 'StrongPassword123!'}`,
      expected_result: `First name is required`
    },
    {
      testcase_id: 'SN-USER-001-05',
      scenario_id: 'SN-USER-001',
      ui_flow: `회원가입 페이지 진입 → 우편번호에 '1234' 입력 → 나머지 필드에 올바른 정보 입력 → 'Register' 버튼 클릭`,
      test_case_name: `회원가입 실패 - 우편번호 형식 오류`,
      input_data: `{'postal_code': '1234'}`,
      expected_result: `Only 5 numbers are allowed.`
    },
    {
      testcase_id: 'SN-USER-001-01',
      scenario_id: 'SN-USER-001',
      ui_flow: `회원가입 페이지 진입 → 이메일, 비밀번호, 이름, 주소, 전화번호, 생년월일 입력 → 'Register' 버튼 클릭`,
      test_case_name: `회원가입 성공`,
      input_data: `{'email': 'newuser@example.com', 'password': 'StrongPassword123!', 'first_name': 'John', 'last_name': 'Doe', 'phone': '1234567890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'New York', 'state': 'NY', 'country': 'USA', 'postal_code': '10001'}`,
      expected_result: `Registration completed successfully`
    },
    {
      testcase_id: 'SN-USER-001-02',
      scenario_id: 'SN-USER-001',
      ui_flow: `회원가입 페이지 진입 → 이메일에 'invalidemail.com' 입력 → 나머지 필드 입력 → 'Register' 클릭`,
      test_case_name: `회원가입 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'invalidemail.com', 'password': 'StrongPassword123!', 'first_name': 'John', 'last_name': 'Doe', 'phone': '1234567890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'New York', 'state': 'NY', 'country': 'USA', 'postal_code': '10001'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-001-03',
      scenario_id: 'SN-USER-001',
      ui_flow: `회원가입 페이지 진입 → 비밀번호에 'Short1!' 입력 → 나머지 필드 입력 → 'Register' 클릭`,
      test_case_name: `회원가입 실패 - 비밀번호 길이 부족`,
      input_data: `{'email': 'newuser@example.com', 'password': 'Short1!', 'first_name': 'John', 'last_name': 'Doe', 'phone': '1234567890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'New York', 'state': 'NY', 'country': 'USA', 'postal_code': '10001'}`,
      expected_result: `Password must be minimal 6 characters long.`
    },
    {
      testcase_id: 'SN-USER-001-04',
      scenario_id: 'SN-USER-001',
      ui_flow: `회원가입 페이지 진입 → 비밀번호에 'NoNumbers!' 입력 → 나머지 필드 입력 → 'Register' 클릭`,
      test_case_name: `회원가입 실패 - 비밀번호에 숫자 없음`,
      input_data: `{'email': 'newuser@example.com', 'password': 'NoNumbers!', 'first_name': 'John', 'last_name': 'Doe', 'phone': '1234567890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'New York', 'state': 'NY', 'country': 'USA', 'postal_code': '10001'}`,
      expected_result: `The password field must contain at least one number.`
    },
    {
      testcase_id: 'SN-USER-001-05',
      scenario_id: 'SN-USER-001',
      ui_flow: `회원가입 페이지 진입 → 비밀번호에 'NoSpecial123' 입력 → 나머지 필드 입력 → 'Register' 클릭`,
      test_case_name: `회원가입 실패 - 비밀번호에 특수문자 없음`,
      input_data: `{'email': 'newuser@example.com', 'password': 'NoSpecial123', 'first_name': 'John', 'last_name': 'Doe', 'phone': '1234567890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'New York', 'state': 'NY', 'country': 'USA', 'postal_code': '10001'}`,
      expected_result: `The password field must contain at least one symbol.`
    },
    {
      testcase_id: 'SN-USER-001-06',
      scenario_id: 'SN-USER-001',
      ui_flow: `회원가입 페이지 진입 → 이메일, 비밀번호만 입력 → 'Register' 클릭`,
      test_case_name: `회원가입 실패 - 필수 필드 누락`,
      input_data: `{'email': 'newuser@example.com', 'password': 'StrongPassword123!'}`,
      expected_result: `First name is required`
    },
    {
      testcase_id: 'SN-USER-001-07',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일, 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 성공`,
      input_data: `{'email': 'customer@practicesoftwaretesting.com', 'password': 'welcome01'}`,
      expected_result: `User logged in: customer@practicesoftwaretesting.com`
    },
    {
      testcase_id: 'SN-USER-001-08',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일, 잘못된 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 잘못된 비밀번호`,
      input_data: `{'email': 'customer@practicesoftwaretesting.com', 'password': 'wrongpassword'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-001-09',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 잘못된 이메일, 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 잘못된 이메일`,
      input_data: `{'email': 'wrongemail@example.com', 'password': 'welcome01'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-001-01',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일, 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 성공`,
      input_data: `{'email': 'customer@practicesoftwaretesting.com', 'password': 'welcome01'}`,
      expected_result: `Login`
    },
    {
      testcase_id: 'SN-USER-001-02',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일에 'customerpracticesoftwaretesting.com' 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'customerpracticesoftwaretesting.com', 'password': 'welcome01'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-001-03',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일 입력 → 비밀번호에 'wel' 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 비밀번호 최소 길이 미달`,
      input_data: `{'email': 'customer@practicesoftwaretesting.com', 'password': 'wel'}`,
      expected_result: `Password length is invalid`
    },
    {
      testcase_id: 'SN-USER-001-04',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일 입력 → 비밀번호에 'A'.repeat(41) 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 비밀번호 최대 길이 초과`,
      input_data: `{'email': 'customer@practicesoftwaretesting.com', 'password': 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}`,
      expected_result: `Password length is invalid`
    },
    {
      testcase_id: 'SN-USER-001-05',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일에 'wrong@practicesoftwaretesting.com' 입력 → 비밀번호에 'wrongpassword' 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 잘못된 이메일 또는 비밀번호`,
      input_data: `{'email': 'wrong@practicesoftwaretesting.com', 'password': 'wrongpassword'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-001-01',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일, 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 성공`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01'}`,
      expected_result: `로그인 성공 후 사용자 대시보드로 이동`
    },
    {
      testcase_id: 'SN-USER-001-02',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일에 'john@doe.example' 입력 → 비밀번호에 'wrong-password' 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 잘못된 비밀번호`,
      input_data: `{'email': 'john@doe.example', 'password': 'wrong-password'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-001-03',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일에 'johndoe.example' 입력 → 비밀번호에 'welcome01' 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'johndoe.example', 'password': 'welcome01'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-001-04',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일 필드 비워둠 → 비밀번호에 'welcome01' 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 이메일 필드 비어 있음`,
      input_data: `{'email': '', 'password': 'welcome01'}`,
      expected_result: `Email is required`
    },
    {
      testcase_id: 'SN-USER-001-05',
      scenario_id: 'SN-USER-001',
      ui_flow: `로그인 페이지 진입 → 이메일에 'john@doe.example' 입력 → 비밀번호 필드 비워둠 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 비밀번호 필드 비어 있음`,
      input_data: `{'email': 'john@doe.example', 'password': ''}`,
      expected_result: `Password is required`
    },
    {
      testcase_id: 'SN-USER-002-01',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지 진입 → 프로필 정보 수정 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 조회 및 수정 성공`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01', 'first_name': 'John', 'last_name': 'Doe', 'phone': '0987654321', 'dob': '1970-01-01', 'address': {'street': 'Street 1', 'city': 'City', 'state': 'State', 'country': 'Country', 'postal_code': '1234AA'}}`,
      expected_result: `Your profile is <strong>successfully</strong> updated!`
    },
    {
      testcase_id: 'SN-USER-002-02',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지 진입 → 이메일에 'johndoe.example' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'johndoe.example', 'password': 'welcome01'}`,
      expected_result: `The email field must be a valid email address.`
    },
    {
      testcase_id: 'SN-USER-002-03',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지 진입 → 전화번호에 'abc123' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 전화번호 형식 오류`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01', 'phone': 'abc123'}`,
      expected_result: `Only numbers are allowed.`
    },
    {
      testcase_id: 'SN-USER-002-04',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지 진입 → 이름 필드 비워둠 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 필수 필드 누락`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01', 'first_name': ''}`,
      expected_result: `The first name field is required.`
    },
    {
      testcase_id: 'SN-USER-002-05',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지 진입 → 우편번호에 '123' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 우편번호 형식 오류`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01', 'address': {'postal_code': '123'}}`,
      expected_result: `Only 5 numbers are allowed.`
    },
    {
      testcase_id: 'SN-USER-002-01',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 'My account' 클릭 → 'My profile' 클릭 → 프로필 정보 수정 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 조회 및 수정 성공`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!', 'first_name': 'John', 'last_name': 'Doe', 'phone': '1234567890', 'street': '123 Main St', 'postal_code': '12345', 'city': 'Anytown', 'state': 'Anystate', 'country': 'Anyland'}`,
      expected_result: `Your profile is <strong>successfully</strong> updated!`
    },
    {
      testcase_id: 'SN-USER-002-02',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 'My account' 클릭 → 'My profile' 클릭 → 이메일에 'userexample.com' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'userexample.com', 'password': 'ValidPassword123!'}`,
      expected_result: `The email field must be a valid email address.`
    },
    {
      testcase_id: 'SN-USER-002-03',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 'My account' 클릭 → 'My profile' 클릭 → 전화번호에 '123-456-7890' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 전화번호 형식 오류`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!', 'phone': '123-456-7890'}`,
      expected_result: `Only numbers are allowed.`
    },
    {
      testcase_id: 'SN-USER-002-04',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 'My account' 클릭 → 'My profile' 클릭 → 우편번호에 '1234' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 우편번호 형식 오류`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!', 'postal_code': '1234'}`,
      expected_result: `Only 5 numbers are allowed.`
    },
    {
      testcase_id: 'SN-USER-002-05',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 'My account' 클릭 → 'My profile' 클릭 → 이름 필드 비워둠 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 필수 필드 누락`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!', 'first_name': ''}`,
      expected_result: `First name is required`
    },
    {
      testcase_id: 'SN-USER-002-01',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 'My Profile' 선택`,
      test_case_name: `프로필 정보 조회 성공`,
      input_data: `{'email': 'mehrad@example.com', 'password': 'ValidPassword123!'}`,
      expected_result: `Profile page is displayed with user's current information`
    },
    {
      testcase_id: 'SN-USER-002-02',
      scenario_id: 'SN-USER-002',
      ui_flow: `프로필 페이지 진입 → 이름, 성, 전화번호, 주소 정보 수정 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 성공`,
      input_data: `{'first_name': 'Mehrad', 'last_name': 'Sadeghi', 'phone': '1234567890', 'street': 'New Street', 'city': 'New City', 'state': 'New State', 'country': 'New Country', 'postal_code': '12345'}`,
      expected_result: `Your profile is <strong>successfully</strong> updated!`
    },
    {
      testcase_id: 'SN-USER-002-03',
      scenario_id: 'SN-USER-002',
      ui_flow: `프로필 페이지 진입 → 전화번호에 'abc123' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 전화번호 형식 오류`,
      input_data: `{'phone': 'abc123'}`,
      expected_result: `Only numbers are allowed.`
    },
    {
      testcase_id: 'SN-USER-002-04',
      scenario_id: 'SN-USER-002',
      ui_flow: `프로필 페이지 진입 → 우편번호에 '1234' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 우편번호 형식 오류`,
      input_data: `{'postal_code': '1234'}`,
      expected_result: `Only 5 numbers are allowed.`
    },
    {
      testcase_id: 'SN-USER-002-05',
      scenario_id: 'SN-USER-002',
      ui_flow: `프로필 페이지 진입 → 이름 필드 비워둠 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 필수 필드 누락`,
      input_data: `{'first_name': ''}`,
      expected_result: `First name is required`
    },
    {
      testcase_id: 'SN-USER-002-06',
      scenario_id: 'SN-USER-002',
      ui_flow: `프로필 페이지 진입 → 이메일에 'invalidemail' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'invalidemail'}`,
      expected_result: `The email field must be a valid email address.`
    },
    {
      testcase_id: 'SN-USER-002-01',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지 진입 → 프로필 정보 수정 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 성공`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01', 'first_name': 'UpdatedName', 'last_name': 'Doe', 'phone': '0987654321', 'street': 'Street 1', 'city': 'City', 'state': 'State', 'country': 'Country', 'postal_code': '1234AA'}`,
      expected_result: `Your profile is <strong>successfully</strong> updated!`
    },
    {
      testcase_id: 'SN-USER-002-02',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지 진입 → 이메일에 'johndoe.example' 입력 → 나머지 필드 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'johndoe.example', 'first_name': 'John', 'last_name': 'Doe', 'phone': '0987654321', 'street': 'Street 1', 'city': 'City', 'state': 'State', 'country': 'Country', 'postal_code': '1234AA'}`,
      expected_result: `The email field must be a valid email address.`
    },
    {
      testcase_id: 'SN-USER-002-03',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지 진입 → 'first_name' 필드 비워둠 → 나머지 필드 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 필수 필드 누락`,
      input_data: `{'email': 'john@doe.example', 'first_name': '', 'last_name': 'Doe', 'phone': '0987654321', 'street': 'Street 1', 'city': 'City', 'state': 'State', 'country': 'Country', 'postal_code': '1234AA'}`,
      expected_result: `The first name field is required.`
    },
    {
      testcase_id: 'SN-USER-002-04',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지 진입 → 전화번호에 'abc123' 입력 → 나머지 필드 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 전화번호 형식 오류`,
      input_data: `{'email': 'john@doe.example', 'first_name': 'John', 'last_name': 'Doe', 'phone': 'abc123', 'street': 'Street 1', 'city': 'City', 'state': 'State', 'country': 'Country', 'postal_code': '1234AA'}`,
      expected_result: `Only numbers are allowed.`
    },
    {
      testcase_id: 'SN-USER-002-01',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지로 이동 → 프로필 정보 수정 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 성공`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01', 'first_name': 'UpdatedName', 'last_name': 'Doe', 'phone': '0987654321', 'street': 'Street 1', 'postal_code': '1234AA', 'city': 'City', 'state': 'State', 'country': 'Country'}`,
      expected_result: `Your profile is <strong>successfully</strong> updated!`
    },
    {
      testcase_id: 'SN-USER-002-02',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지로 이동 → 이메일에 'johndoe.example' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'johndoe.example', 'password': 'welcome01'}`,
      expected_result: `The email field must be a valid email address.`
    },
    {
      testcase_id: 'SN-USER-002-03',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지로 이동 → 전화번호에 'abc123' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 전화번호 형식 오류`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01', 'phone': 'abc123'}`,
      expected_result: `Only numbers are allowed.`
    },
    {
      testcase_id: 'SN-USER-002-04',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지로 이동 → 우편번호에 '123' 입력 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 우편번호 형식 오류`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01', 'postal_code': '123'}`,
      expected_result: `Only 5 numbers are allowed.`
    },
    {
      testcase_id: 'SN-USER-002-05',
      scenario_id: 'SN-USER-002',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 프로필 페이지로 이동 → 이름 필드 비워둠 → 'Update Profile' 버튼 클릭`,
      test_case_name: `프로필 수정 실패 - 필수 필드 누락`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01', 'first_name': ''}`,
      expected_result: `The first name field is required.`
    },
    {
      testcase_id: 'SN-USER-003-01',
      scenario_id: 'SN-USER-003',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 성공`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01'}`,
      expected_result: `로그인 성공 후 개인 대시보드로 이동`
    },
    {
      testcase_id: 'SN-USER-003-02',
      scenario_id: 'SN-USER-003',
      ui_flow: `로그인 페이지 진입 → 이메일과 잘못된 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 잘못된 비밀번호`,
      input_data: `{'email': 'john@doe.example', 'password': 'wrong-password'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-003-03',
      scenario_id: 'SN-USER-003',
      ui_flow: `로그인 페이지 진입 → 잘못된 형식의 이메일 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'john.doe.example', 'password': 'welcome01'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-003-04',
      scenario_id: 'SN-USER-003',
      ui_flow: `로그인 페이지 진입 → 이메일 필드 비워둠 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 이메일 필드 비어있음`,
      input_data: `{'email': '', 'password': 'welcome01'}`,
      expected_result: `Email is required`
    },
    {
      testcase_id: 'SN-USER-003-05',
      scenario_id: 'SN-USER-003',
      ui_flow: `로그인 페이지 진입 → 이메일 입력 → 비밀번호 필드 비워둠 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 비밀번호 필드 비어있음`,
      input_data: `{'email': 'john@doe.example', 'password': ''}`,
      expected_result: `Password is required`
    },
    {
      testcase_id: 'SN-USER-003-06',
      scenario_id: 'SN-USER-003',
      ui_flow: `로그인 페이지 진입 → 존재하지 않는 이메일 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 존재하지 않는 이메일`,
      input_data: `{'email': 'nonexistent@example.com', 'password': 'welcome01'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-003-01',
      scenario_id: 'SN-USER-003',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 'My account' 클릭 → 'Favorites' 클릭`,
      test_case_name: `관심 상품 조회 성공`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!'}`,
      expected_result: `Favorites`
    },
    {
      testcase_id: 'SN-USER-003-02',
      scenario_id: 'SN-USER-003',
      ui_flow: `'My account' 클릭 → 'Favorites' 클릭`,
      test_case_name: `관심 상품 조회 실패 - 로그인하지 않음`,
      input_data: `{}`,
      expected_result: `Unauthorized`
    },
    {
      testcase_id: 'SN-USER-003-03',
      scenario_id: 'SN-USER-003',
      ui_flow: `로그인 페이지 진입 → 이메일에 'userexample.com' 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `관심 상품 조회 실패 - 잘못된 이메일 형식`,
      input_data: `{'email': 'userexample.com', 'password': 'ValidPassword123!'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-003-04',
      scenario_id: 'SN-USER-003',
      ui_flow: `로그인 페이지 진입 → 이메일 입력 → 비밀번호 입력하지 않음 → 'Login' 버튼 클릭`,
      test_case_name: `관심 상품 조회 실패 - 비밀번호 누락`,
      input_data: `{'email': 'user@example.com', 'password': ''}`,
      expected_result: `Password is required`
    },
    {
      testcase_id: 'SN-USER-003-05',
      scenario_id: 'SN-USER-003',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `관심 상품 조회 실패 - 존재하지 않는 계정`,
      input_data: `{'email': 'nonexistent@example.com', 'password': 'SomePassword123!'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-004-01',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 성공`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01'}`,
      expected_result: `Redirect to user dashboard`
    },
    {
      testcase_id: 'SN-USER-004-02',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 페이지 진입 → 이메일과 잘못된 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 잘못된 비밀번호`,
      input_data: `{'email': 'john@doe.example', 'password': 'wrong-password'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-004-03',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 페이지 진입 → 잘못된 형식의 이메일 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'john.doe.example', 'password': 'welcome01'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-004-04',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 페이지 진입 → 이메일 필드 비워둠 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 이메일 필드 비어있음`,
      input_data: `{'email': '', 'password': 'welcome01'}`,
      expected_result: `Email is required`
    },
    {
      testcase_id: 'SN-USER-004-05',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 페이지 진입 → 이메일 입력 → 비밀번호 필드 비워둠 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 비밀번호 필드 비어있음`,
      input_data: `{'email': 'john@doe.example', 'password': ''}`,
      expected_result: `Password is required`
    },
    {
      testcase_id: 'SN-USER-004-06',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 페이지 진입 → 존재하지 않는 이메일 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 존재하지 않는 이메일`,
      input_data: `{'email': 'nonexistent@example.com', 'password': 'welcome01'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-004-01',
      scenario_id: 'SN-USER-004',
      ui_flow: `상품 목록 페이지 진입 → 검색 입력란에 'Hammer' 입력 → 'Search' 버튼 클릭`,
      test_case_name: `상품 검색 성공`,
      input_data: `{'query': 'Hammer'}`,
      expected_result: `Searched for: Hammer`
    },
    {
      testcase_id: 'SN-USER-004-02',
      scenario_id: 'SN-USER-004',
      ui_flow: `상품 목록 페이지 진입 → 검색 입력란에 아무것도 입력하지 않음 → 'Search' 버튼 클릭`,
      test_case_name: `상품 검색 실패 - 검색어 미입력`,
      input_data: `{'query': ''}`,
      expected_result: `The query field is required.`
    },
    {
      testcase_id: 'SN-USER-004-03',
      scenario_id: 'SN-USER-004',
      ui_flow: `상품 목록 페이지 진입 → 검색 입력란에 '!@#$%' 입력 → 'Search' 버튼 클릭`,
      test_case_name: `상품 검색 실패 - 검색어에 특수문자 포함`,
      input_data: `{'query': '!@#$%'}`,
      expected_result: `There are no products found.`
    },
    {
      testcase_id: 'SN-USER-004-04',
      scenario_id: 'SN-USER-004',
      ui_flow: `상품 목록 페이지 진입 → 검색 입력란에 '12345' 입력 → 'Search' 버튼 클릭`,
      test_case_name: `상품 검색 실패 - 검색어에 숫자만 포함`,
      input_data: `{'query': '12345'}`,
      expected_result: `There are no products found.`
    },
    {
      testcase_id: 'SN-USER-004-01',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 검색 결과에서 상품 클릭`,
      test_case_name: `상품 상세 정보 확인 성공`,
      input_data: `{'email': 'customer@practicesoftwaretesting.com', 'password': 'ValidPassword123!'}`,
      expected_result: `상품 상세 페이지가 로드되고, 상품 이름과 가격이 표시됨`
    },
    {
      testcase_id: 'SN-USER-004-02',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → URL에 잘못된 상품 ID 입력 후 페이지 접근`,
      test_case_name: `상품 상세 정보 확인 실패 - 잘못된 상품 ID`,
      input_data: `{'email': 'customer@practicesoftwaretesting.com', 'password': 'ValidPassword123!'}`,
      expected_result: `404 Not Found`
    },
    {
      testcase_id: 'SN-USER-004-03',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 없이 상품 검색 → 검색 결과에서 상품 클릭`,
      test_case_name: `상품 상세 정보 확인 실패 - 로그인하지 않음`,
      input_data: `{}`,
      expected_result: `Unauthorized, can not add product to your favorite list.`
    },
    {
      testcase_id: 'SN-USER-004-04',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 존재하지 않는 상품 이름 입력 후 검색`,
      test_case_name: `상품 상세 정보 확인 실패 - 상품이 존재하지 않음`,
      input_data: `{'email': 'customer@practicesoftwaretesting.com', 'password': 'ValidPassword123!', 'query': 'NonExistentProduct'}`,
      expected_result: `There are no products found.`
    },
    {
      testcase_id: 'SN-USER-004-01',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 상품 상세 정보 페이지 진입 → 수량 선택 → 'Add to cart' 버튼 클릭`,
      test_case_name: `장바구니에 상품 추가 성공`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!', 'product_id': '1234', 'quantity': '2'}`,
      expected_result: `Product added to shopping cart.`
    },
    {
      testcase_id: 'SN-USER-004-02',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 상품 상세 정보 페이지 진입 → 수량을 0으로 설정 → 'Add to cart' 버튼 클릭`,
      test_case_name: `장바구니에 상품 추가 실패 - 수량이 0인 경우`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!', 'product_id': '1234', 'quantity': '0'}`,
      expected_result: `The quantity field must be at least 1.`
    },
    {
      testcase_id: 'SN-USER-004-03',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 상품 상세 정보 페이지 진입 → 수량을 -1로 설정 → 'Add to cart' 버튼 클릭`,
      test_case_name: `장바구니에 상품 추가 실패 - 수량이 음수인 경우`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!', 'product_id': '1234', 'quantity': '-1'}`,
      expected_result: `The quantity field must be at least 1.`
    },
    {
      testcase_id: 'SN-USER-004-04',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 상품 상세 정보 페이지 진입 → 수량을 100으로 설정 → 'Add to cart' 버튼 클릭`,
      test_case_name: `장바구니에 상품 추가 실패 - 수량이 최대치를 초과한 경우`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!', 'product_id': '1234', 'quantity': '100'}`,
      expected_result: `The quantity field must not be greater than 99.`
    },
    {
      testcase_id: 'SN-USER-004-05',
      scenario_id: 'SN-USER-004',
      ui_flow: `상품 검색 → 상품 상세 정보 페이지 진입 → 수량 선택 → 'Add to cart' 버튼 클릭`,
      test_case_name: `장바구니에 상품 추가 실패 - 로그인하지 않은 경우`,
      input_data: `{'product_id': '1234', 'quantity': '2'}`,
      expected_result: `Unauthorized, can not add product to your favorite list.`
    },
    {
      testcase_id: 'SN-USER-004-01',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 상품 상세 정보 확인 → 장바구니 추가 → 장바구니 페이지 진입`,
      test_case_name: `장바구니 조회 성공`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!'}`,
      expected_result: `Cart contents displayed successfully`
    },
    {
      testcase_id: 'SN-USER-004-02',
      scenario_id: 'SN-USER-004',
      ui_flow: `장바구니 페이지 진입`,
      test_case_name: `장바구니 조회 실패 - 로그인하지 않음`,
      input_data: `{}`,
      expected_result: `Unauthorized access`
    },
    {
      testcase_id: 'SN-USER-004-03',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 장바구니 페이지 진입`,
      test_case_name: `장바구니 조회 실패 - 장바구니 없음`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!'}`,
      expected_result: `The cart is empty. Nothing to display.`
    },
    {
      testcase_id: 'SN-USER-004-04',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 장바구니 페이지 진입 → 세션 만료 후 장바구니 페이지 새로고침`,
      test_case_name: `장바구니 조회 실패 - 세션 만료`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!'}`,
      expected_result: `Session expired, please log in again`
    },
    {
      testcase_id: 'SN-USER-004-TC01',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 상품 상세 정보 확인 → 장바구니 추가 → 장바구니 페이지 진입 → 수량 입력란에 '3' 입력 → 'Update' 버튼 클릭`,
      test_case_name: `장바구니 상품 수량 변경 성공`,
      input_data: `{'quantity': '3'}`,
      expected_result: `Product quantity updated.`
    },
    {
      testcase_id: 'SN-USER-004-TC02',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 상품 상세 정보 확인 → 장바구니 추가 → 장바구니 페이지 진입 → 수량 입력란 비워둠 → 'Update' 버튼 클릭`,
      test_case_name: `장바구니 상품 수량 변경 실패 - 수량 필드 누락`,
      input_data: `{'quantity': ''}`,
      expected_result: `The quantity field is required.`
    },
    {
      testcase_id: 'SN-USER-004-TC03',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 상품 상세 정보 확인 → 장바구니 추가 → 장바구니 페이지 진입 → 수량 입력란에 '0' 입력 → 'Update' 버튼 클릭`,
      test_case_name: `장바구니 상품 수량 변경 실패 - 수량이 0 이하`,
      input_data: `{'quantity': '0'}`,
      expected_result: `The quantity field must be at least 1.`
    },
    {
      testcase_id: 'SN-USER-004-TC04',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 상품 상세 정보 확인 → 장바구니 추가 → 장바구니 페이지 진입 → 수량 입력란에 '2.5' 입력 → 'Update' 버튼 클릭`,
      test_case_name: `장바구니 상품 수량 변경 실패 - 수량이 정수가 아님`,
      input_data: `{'quantity': '2.5'}`,
      expected_result: `The quantity field must be an integer.`
    },
    {
      testcase_id: 'SN-USER-004-TC05',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 → 상품 검색 → 상품 상세 정보 확인 → 장바구니 추가 → 장바구니 페이지 진입 → 수량 입력란에 'abc' 입력 → 'Update' 버튼 클릭`,
      test_case_name: `장바구니 상품 수량 변경 실패 - 수량이 숫자가 아님`,
      input_data: `{'quantity': 'abc'}`,
      expected_result: `The quantity field must be an integer.`
    },
    {
      testcase_id: 'SN-USER-004-01',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 상품 검색 → 상품 상세 정보 확인 → 'Add to cart' 클릭 → 장바구니 페이지 진입 → 'Proceed to checkout' 클릭 → 결제 정보 입력 → 'Confirm' 버튼 클릭`,
      test_case_name: `상품 구매 성공`,
      input_data: `{'email': 'testuser@example.com', 'password': 'ValidPassword123!', 'payment_method': 'credit-card', 'credit_card_number': '1234-5678-9101-1121', 'expiration_date': '12/2030', 'cvv': '123', 'card_holder_name': 'John Doe'}`,
      expected_result: `Thanks for your order! Your invoice number is <span id="invoice-number">{{ invoice_number }}</span>.`
    },
    {
      testcase_id: 'SN-USER-004-02',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 상품 검색 → 상품 상세 정보 확인 → 'Add to cart' 클릭 → 장바구니 페이지 진입 → 'Proceed to checkout' 클릭 → 결제 정보 입력 없이 'Confirm' 버튼 클릭`,
      test_case_name: `상품 구매 실패 - 결제 방법 미선택`,
      input_data: `{'email': 'testuser@example.com', 'password': 'ValidPassword123!'}`,
      expected_result: `Payment method is required.`
    },
    {
      testcase_id: 'SN-USER-004-03',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 상품 검색 → 상품 상세 정보 확인 → 'Add to cart' 클릭 → 장바구니 페이지 진입 → 'Proceed to checkout' 클릭 → 결제 정보 입력 (잘못된 카드 번호) → 'Confirm' 버튼 클릭`,
      test_case_name: `상품 구매 실패 - 잘못된 신용카드 번호 형식`,
      input_data: `{'email': 'testuser@example.com', 'password': 'ValidPassword123!', 'payment_method': 'credit-card', 'credit_card_number': '1234-5678-9101', 'expiration_date': '12/2030', 'cvv': '123', 'card_holder_name': 'John Doe'}`,
      expected_result: `Invalid card number format.`
    },
    {
      testcase_id: 'SN-USER-004-04',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 상품 검색 → 상품 상세 정보 확인 → 'Add to cart' 클릭 → 장바구니 페이지 진입 → 'Proceed to checkout' 클릭 → 결제 정보 입력 (과거의 만료 날짜) → 'Confirm' 버튼 클릭`,
      test_case_name: `상품 구매 실패 - 과거의 만료 날짜`,
      input_data: `{'email': 'testuser@example.com', 'password': 'ValidPassword123!', 'payment_method': 'credit-card', 'credit_card_number': '1234-5678-9101-1121', 'expiration_date': '12/2020', 'cvv': '123', 'card_holder_name': 'John Doe'}`,
      expected_result: `Expiration date must be in the future.`
    },
    {
      testcase_id: 'SN-USER-004-05',
      scenario_id: 'SN-USER-004',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 상품 검색 → 상품 상세 정보 확인 → 'Add to cart' 클릭 → 장바구니 페이지 진입 → 'Proceed to checkout' 클릭 → 결제 정보 입력 (잘못된 CVV) → 'Confirm' 버튼 클릭`,
      test_case_name: `상품 구매 실패 - CVV 형식 오류`,
      input_data: `{'email': 'testuser@example.com', 'password': 'ValidPassword123!', 'payment_method': 'credit-card', 'credit_card_number': '1234-5678-9101-1121', 'expiration_date': '12/2030', 'cvv': '12', 'card_holder_name': 'John Doe'}`,
      expected_result: `CVV must be 3 or 4 digits.`
    },
    {
      testcase_id: 'SN-USER-005-01',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 성공`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01'}`,
      expected_result: `Successfully logged in`
    },
    {
      testcase_id: 'SN-USER-005-02',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일과 잘못된 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 잘못된 비밀번호`,
      input_data: `{'email': 'john@doe.example', 'password': 'wrong-password'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-005-03',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 잘못된 형식의 이메일 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'john.doe.example', 'password': 'welcome01'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-005-04',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일 필드 비워둠 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 이메일 필드 비어있음`,
      input_data: `{'email': '', 'password': 'welcome01'}`,
      expected_result: `Email is required`
    },
    {
      testcase_id: 'SN-USER-005-05',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일 입력 → 비밀번호 필드 비워둠 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 비밀번호 필드 비어있음`,
      input_data: `{'email': 'john@doe.example', 'password': ''}`,
      expected_result: `Password is required`
    },
    {
      testcase_id: 'SN-USER-005-06',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 계정 잠김`,
      input_data: `{'email': 'locked@doe.example', 'password': 'welcome01'}`,
      expected_result: `Account is locked`
    },
    {
      testcase_id: 'SN-USER-005-07',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 계정 비활성화`,
      input_data: `{'email': 'disabled@doe.example', 'password': 'welcome01'}`,
      expected_result: `Account is disabled`
    },
    {
      testcase_id: 'SN-USER-005-01',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 → 문의하기 페이지 진입 → 이름, 이메일, 제목, 메시지 입력 → 'Send' 버튼 클릭`,
      test_case_name: `문의하기 성공`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'subject': 'return', 'message': 'This is a test message. This is a test message. This is a test message. This is a test message.'}`,
      expected_result: `Thanks for your message! We will contact you shortly.`
    },
    {
      testcase_id: 'SN-USER-005-02',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 → 문의하기 페이지 진입 → 이름, 이메일에 'john.doeexample.com' 입력 → 제목, 메시지 입력 → 'Send' 버튼 클릭`,
      test_case_name: `문의하기 실패 - 이메일 형식 오류`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doeexample.com', 'subject': 'return', 'message': 'This is a test message. This is a test message. This is a test message. This is a test message.'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-005-03',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 → 문의하기 페이지 진입 → 이름, 이메일, 제목 입력 → 메시지에 'Short message' 입력 → 'Send' 버튼 클릭`,
      test_case_name: `문의하기 실패 - 메시지 길이 부족`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'subject': 'return', 'message': 'Short message'}`,
      expected_result: `Message must be minimal 50 characters`
    },
    {
      testcase_id: 'SN-USER-005-04',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 → 문의하기 페이지 진입 → 이메일, 제목, 메시지 입력 → 'Send' 버튼 클릭`,
      test_case_name: `문의하기 실패 - 필수 필드 누락`,
      input_data: `{'first_name': '', 'last_name': '', 'email': 'john.doe@example.com', 'subject': 'return', 'message': 'This is a test message. This is a test message. This is a test message. This is a test message.'}`,
      expected_result: `First name is required`
    },
    {
      testcase_id: 'SN-USER-005-05',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 → 문의하기 페이지 진입 → 이름, 이메일, 제목, 메시지 입력 → 잘못된 형식의 파일 첨부 → 'Send' 버튼 클릭`,
      test_case_name: `문의하기 실패 - 첨부 파일 형식 오류`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'subject': 'return', 'message': 'This is a test message. This is a test message. This is a test message. This is a test message.', 'attachment': 'test.pdf'}`,
      expected_result: `File should have a txt extension.`
    },
    {
      testcase_id: 'SN-USER-005-01',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Sign in' 버튼 클릭 → 문의하기 페이지로 이동 → 메시지 입력 → 'Send' 버튼 클릭`,
      test_case_name: `문의하기 성공`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!', 'message': 'This is a valid inquiry message with more than 50 characters to meet the minimum length requirement.'}`,
      expected_result: `Thanks for your message! We will contact you shortly.`
    },
    {
      testcase_id: 'SN-USER-005-02',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Sign in' 버튼 클릭 → 문의하기 페이지로 이동 → 메시지 입력 → 'Send' 버튼 클릭`,
      test_case_name: `문의하기 실패 - 메시지 길이 부족`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!', 'message': 'Short message'}`,
      expected_result: `Message must be minimal 50 characters`
    },
    {
      testcase_id: 'SN-USER-005-03',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Sign in' 버튼 클릭 → 문의하기 페이지로 이동 → 메시지 입력 없이 'Send' 버튼 클릭`,
      test_case_name: `문의하기 실패 - 메시지 미입력`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!', 'message': ''}`,
      expected_result: `Message is required`
    },
    {
      testcase_id: 'SN-USER-005-04',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일에 'userexample.com' 입력 → 비밀번호 입력 → 'Sign in' 버튼 클릭`,
      test_case_name: `문의하기 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'userexample.com', 'password': 'ValidPassword123!'}`,
      expected_result: `Invalid email format`
    },
    {
      testcase_id: 'SN-USER-005-05',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일 입력 → 비밀번호 입력 없이 'Sign in' 버튼 클릭`,
      test_case_name: `문의하기 실패 - 비밀번호 미입력`,
      input_data: `{'email': 'user@example.com', 'password': ''}`,
      expected_result: `Password is required`
    },
    {
      testcase_id: 'SN-USER-005-01',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 → 문의하기 선택 → 메시지 입력 → 'Send' 버튼 클릭`,
      test_case_name: `문의 메시지 전송 성공`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'subject': 'Return', 'message': 'This is a test message. This is a test message. This is a test message. This is a test message.'}`,
      expected_result: `Thanks for your message! We will contact you shortly.`
    },
    {
      testcase_id: 'SN-USER-005-02',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 → 문의하기 선택 → 이메일에 'john.doeexample.com' 입력 → 나머지 필드 입력 → 'Send' 클릭`,
      test_case_name: `문의 메시지 전송 실패 - 이메일 형식 오류`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doeexample.com', 'subject': 'Return', 'message': 'This is a test message. This is a test message. This is a test message. This is a test message.'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-005-03',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 → 문의하기 선택 → 메시지에 'Short message' 입력 → 나머지 필드 입력 → 'Send' 클릭`,
      test_case_name: `문의 메시지 전송 실패 - 메시지 길이 부족`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'subject': 'Return', 'message': 'Short message'}`,
      expected_result: `Message must be minimal 50 characters`
    },
    {
      testcase_id: 'SN-USER-005-04',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 → 문의하기 선택 → 첨부 파일에 'test.pdf' 업로드 → 나머지 필드 입력 → 'Send' 클릭`,
      test_case_name: `문의 메시지 전송 실패 - 첨부 파일 형식 오류`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'subject': 'Return', 'message': 'This is a test message. This is a test message. This is a test message. This is a test message.', 'attachment': 'test.pdf'}`,
      expected_result: `File should have a txt extension.`
    },
    {
      testcase_id: 'SN-USER-005-05',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 → 문의하기 선택 → 첨부 파일에 'log.txt' (500KB) 업로드 → 나머지 필드 입력 → 'Send' 클릭`,
      test_case_name: `문의 메시지 전송 실패 - 첨부 파일 크기 오류`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'subject': 'Return', 'message': 'This is a test message. This is a test message. This is a test message. This is a test message.', 'attachment': 'log.txt'}`,
      expected_result: `File should be empty.`
    },
    {
      testcase_id: 'SN-USER-005-01',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 'My account' 클릭 → 'Messages' 클릭`,
      test_case_name: `문의 내역 조회 성공`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!'}`,
      expected_result: `Messages`
    },
    {
      testcase_id: 'SN-USER-005-02',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일에 'userexample.com' 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `문의 내역 조회 실패 - 잘못된 이메일 형식`,
      input_data: `{'email': 'userexample.com', 'password': 'ValidPassword123!'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-005-03',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일 입력 → 비밀번호 입력하지 않음 → 'Login' 버튼 클릭`,
      test_case_name: `문의 내역 조회 실패 - 비밀번호 누락`,
      input_data: `{'email': 'user@example.com', 'password': ''}`,
      expected_result: `Password is required`
    },
    {
      testcase_id: 'SN-USER-005-04',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일과 잘못된 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `문의 내역 조회 실패 - 잘못된 비밀번호`,
      input_data: `{'email': 'user@example.com', 'password': 'WrongPassword!'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-005-05',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 존재하지 않는 이메일과 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `문의 내역 조회 실패 - 계정 미존재`,
      input_data: `{'email': 'nonexistent@example.com', 'password': 'SomePassword123!'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-005-01',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일, 비밀번호 입력 → 'Login' 버튼 클릭 → 'My account' 클릭 → 'My messages' 클릭 → 특정 메시지의 'Details' 클릭`,
      test_case_name: `문의 메시지 상세 조회 성공`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!'}`,
      expected_result: `Message: 123 - Practice Software Testing - Toolshop - v5.0`
    },
    {
      testcase_id: 'SN-USER-005-02',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일, 비밀번호 입력 → 'Login' 버튼 클릭 → 'My account' 클릭 → 'My messages' 클릭 → 존재하지 않는 메시지 ID로 'Details' 클릭`,
      test_case_name: `문의 메시지 상세 조회 실패 - 잘못된 메시지 ID`,
      input_data: `{'email': 'user@example.com', 'password': 'ValidPassword123!'}`,
      expected_result: `This message doesn't exist.`
    },
    {
      testcase_id: 'SN-USER-005-03',
      scenario_id: 'SN-USER-005',
      ui_flow: `'My account' 클릭 → 'My messages' 클릭`,
      test_case_name: `문의 메시지 상세 조회 실패 - 로그인하지 않은 상태`,
      input_data: `{}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-005-04',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일에 'userexample.com' 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `문의 메시지 상세 조회 실패 - 잘못된 이메일 형식`,
      input_data: `{'email': 'userexample.com', 'password': 'ValidPassword123!'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-005-05',
      scenario_id: 'SN-USER-005',
      ui_flow: `로그인 페이지 진입 → 이메일 입력 → 비밀번호 입력하지 않음 → 'Login' 버튼 클릭`,
      test_case_name: `문의 메시지 상세 조회 실패 - 비밀번호 누락`,
      input_data: `{'email': 'user@example.com', 'password': ''}`,
      expected_result: `Password is required`
    },
    {
      testcase_id: 'SN-USER-006-01',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 성공`,
      input_data: `{'email': 'john@doe.example', 'password': 'welcome01'}`,
      expected_result: `Redirect to user dashboard`
    },
    {
      testcase_id: 'SN-USER-006-02',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 페이지 진입 → 이메일과 잘못된 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 잘못된 비밀번호`,
      input_data: `{'email': 'john@doe.example', 'password': 'wrong-password'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-006-03',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 페이지 진입 → 잘못된 형식의 이메일 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'john.doe.example', 'password': 'welcome01'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-USER-006-04',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 페이지 진입 → 이메일 필드 비워둠 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 이메일 필드 비어있음`,
      input_data: `{'email': '', 'password': 'welcome01'}`,
      expected_result: `Email is required`
    },
    {
      testcase_id: 'SN-USER-006-05',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 페이지 진입 → 이메일 입력 → 비밀번호 필드 비워둠 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 비밀번호 필드 비어있음`,
      input_data: `{'email': 'john@doe.example', 'password': ''}`,
      expected_result: `Password is required`
    },
    {
      testcase_id: 'SN-USER-006-06',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 페이지 진입 → 존재하지 않는 이메일 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 존재하지 않는 이메일`,
      input_data: `{'email': 'nonexistent@example.com', 'password': 'welcome01'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-USER-006-01',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → 'DE' 선택`,
      test_case_name: `언어 변경 성공 - 영어에서 독일어로`,
      input_data: `{'language': 'de'}`,
      expected_result: `DE`
    },
    {
      testcase_id: 'SN-USER-006-02',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → 'IT' 선택`,
      test_case_name: `언어 변경 실패 - 지원하지 않는 언어 선택`,
      input_data: `{'language': 'it'}`,
      expected_result: `EN`
    },
    {
      testcase_id: 'SN-USER-006-03',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → 빈 값 선택`,
      test_case_name: `언어 변경 실패 - 빈 언어 코드`,
      input_data: `{'language': ''}`,
      expected_result: `EN`
    },
    {
      testcase_id: 'SN-USER-006-04',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → '123' 선택`,
      test_case_name: `언어 변경 실패 - 잘못된 언어 코드 형식`,
      input_data: `{'language': '123'}`,
      expected_result: `EN`
    },
    {
      testcase_id: 'SN-USER-006-01',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → 'DE' 선택`,
      test_case_name: `언어 변경 성공 - 영어에서 독일어로`,
      input_data: `{'language': 'de'}`,
      expected_result: `DE`
    },
    {
      testcase_id: 'SN-USER-006-02',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → 'IT' 선택`,
      test_case_name: `언어 변경 실패 - 지원하지 않는 언어 선택`,
      input_data: `{'language': 'it'}`,
      expected_result: `EN`
    },
    {
      testcase_id: 'SN-USER-006-03',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → 빈 값 선택`,
      test_case_name: `언어 변경 실패 - 빈 언어 코드`,
      input_data: `{'language': ''}`,
      expected_result: `EN`
    },
    {
      testcase_id: 'SN-USER-006-04',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → '123' 입력`,
      test_case_name: `언어 변경 실패 - 숫자 입력`,
      input_data: `{'language': '123'}`,
      expected_result: `EN`
    },
    {
      testcase_id: 'SN-USER-006-05',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → '!@#' 입력`,
      test_case_name: `언어 변경 실패 - 특수문자 입력`,
      input_data: `{'language': '!@#'}`,
      expected_result: `EN`
    },
    {
      testcase_id: 'SN-USER-006-01',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → 'DE' 선택`,
      test_case_name: `언어 변경 성공 - 영어에서 독일어로 변경`,
      input_data: `{'language': 'de'}`,
      expected_result: `Die Benutzeroberfläche wird auf Deutsch aktualisiert`
    },
    {
      testcase_id: 'SN-USER-006-02',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → 'IT' 선택`,
      test_case_name: `언어 변경 실패 - 지원되지 않는 언어 선택`,
      input_data: `{'language': 'it'}`,
      expected_result: `The selected language is not supported`
    },
    {
      testcase_id: 'SN-USER-006-03',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → 빈 값 선택`,
      test_case_name: `언어 변경 실패 - 빈 언어 코드`,
      input_data: `{'language': ''}`,
      expected_result: `The selected language is not supported`
    },
    {
      testcase_id: 'SN-USER-006-04',
      scenario_id: 'SN-USER-006',
      ui_flow: `로그인 → 언어 선택 드롭다운 클릭 → '123' 선택`,
      test_case_name: `언어 변경 실패 - 잘못된 언어 코드 형식`,
      input_data: `{'language': '123'}`,
      expected_result: `The selected language is not supported`
    },
    {
      testcase_id: 'SN-ADMIN-001-01',
      scenario_id: 'SN-ADMIN-001',
      ui_flow: `로그인 페이지 진입 → 이메일과 비밀번호 입력 → 'Login' 버튼 클릭 → 주문 목록 페이지로 이동 → 특정 주문 클릭하여 상세 정보 확인`,
      test_case_name: `관리자 로그인 및 주문 상세 정보 확인 성공`,
      input_data: `{'email': 'admin@example.com', 'password': 'AdminPassword123!'}`,
      expected_result: `Order details are displayed successfully`
    },
    {
      testcase_id: 'SN-ADMIN-001-02',
      scenario_id: 'SN-ADMIN-001',
      ui_flow: `로그인 페이지 진입 → 이메일에 'adminexample.com' 입력 → 비밀번호 입력 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 잘못된 이메일 형식`,
      input_data: `{'email': 'adminexample.com', 'password': 'AdminPassword123!'}`,
      expected_result: `The email field must be a valid email address.`
    },
    {
      testcase_id: 'SN-ADMIN-001-03',
      scenario_id: 'SN-ADMIN-001',
      ui_flow: `로그인 페이지 진입 → 이메일 입력 → 비밀번호 입력하지 않음 → 'Login' 버튼 클릭`,
      test_case_name: `로그인 실패 - 비밀번호 누락`,
      input_data: `{'email': 'admin@example.com', 'password': ''}`,
      expected_result: `The password field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-001-04',
      scenario_id: 'SN-ADMIN-001',
      ui_flow: `주문 상세 페이지 진입 → 상태 드롭다운에서 잘못된 값 선택 → 'Update status' 버튼 클릭`,
      test_case_name: `주문 상태 업데이트 실패 - 잘못된 상태 값`,
      input_data: `{'status': 'INVALID_STATUS'}`,
      expected_result: `The selected status is invalid.`
    },
    {
      testcase_id: 'SN-ADMIN-001-05',
      scenario_id: 'SN-ADMIN-001',
      ui_flow: `주문 상세 페이지 진입 → 상태 메시지 필드 비워둠 → 'Update status' 버튼 클릭`,
      test_case_name: `주문 상태 메시지 업데이트 실패 - 메시지 누락`,
      input_data: `{'status_message': ''}`,
      expected_result: `The status message field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-001-01',
      scenario_id: 'SN-ADMIN-001',
      ui_flow: `관리자 로그인 → 주문 목록 페이지 진입 → 특정 주문 선택 → 배송 상태를 'SHIPPED'로 변경 → 'Update status' 버튼 클릭`,
      test_case_name: `배송 상태 업데이트 성공`,
      input_data: `{'status': 'SHIPPED'}`,
      expected_result: `Status updated!`
    },
    {
      testcase_id: 'SN-ADMIN-001-02',
      scenario_id: 'SN-ADMIN-001',
      ui_flow: `관리자 로그인 → 주문 목록 페이지 진입 → 특정 주문 선택 → 현재 상태와 동일한 상태 선택 → 'Update status' 버튼 클릭`,
      test_case_name: `배송 상태 업데이트 실패 - 동일한 상태 선택`,
      input_data: `{'status': 'AWAITING_FULFILLMENT'}`,
      expected_result: `No new status selected.`
    },
    {
      testcase_id: 'SN-ADMIN-001-03',
      scenario_id: 'SN-ADMIN-001',
      ui_flow: `관리자 로그인 → 주문 목록 페이지 진입 → 'ON_HOLD' 상태의 주문 선택 → 상태 메시지 입력 없이 다른 상태로 변경 → 'Update status' 버튼 클릭`,
      test_case_name: `배송 상태 업데이트 실패 - 상태 메시지 누락`,
      input_data: `{'status': 'AWAITING_SHIPMENT', 'status_message': ''}`,
      expected_result: `Order was "on hold", status message must be set.`
    },
    {
      testcase_id: 'SN-ADMIN-001-04',
      scenario_id: 'SN-ADMIN-001',
      ui_flow: `관리자 로그인 → 주문 목록 페이지 진입 → 특정 주문 선택 → 존재하지 않는 상태 입력 → 'Update status' 버튼 클릭`,
      test_case_name: `배송 상태 업데이트 실패 - 잘못된 상태 입력`,
      input_data: `{'status': 'INVALID_STATUS'}`,
      expected_result: `The selected status is invalid.`
    },
    {
      testcase_id: 'SN-ADMIN-001-05',
      scenario_id: 'SN-ADMIN-001',
      ui_flow: `관리자 로그인 → 주문 목록 페이지 진입 → 'ON_HOLD' 상태의 주문 선택 → 상태 메시지에 51자 이상 입력 → 'Update status' 버튼 클릭`,
      test_case_name: `배송 상태 업데이트 실패 - 상태 메시지 길이 초과`,
      input_data: `{'status': 'AWAITING_SHIPMENT', 'status_message': 'This is a very long status message that exceeds the maximum length allowed.'}`,
      expected_result: `The status message must be between 5 and 50 characters.`
    },
    {
      testcase_id: 'SN-ADMIN-002-01',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 브랜드 목록 페이지 진입 → 'Add Brand' 버튼 클릭 → 이름과 슬러그 입력 → 'Save' 버튼 클릭`,
      test_case_name: `브랜드 추가 성공`,
      input_data: `{'name': 'New Brand', 'slug': 'new-brand'}`,
      expected_result: `Brand saved!`
    },
    {
      testcase_id: 'SN-ADMIN-002-02',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 브랜드 목록 페이지 진입 → 'Add Brand' 버튼 클릭 → 슬러그 입력 → 'Save' 버튼 클릭`,
      test_case_name: `브랜드 추가 실패 - 이름 필드 누락`,
      input_data: `{'name': '', 'slug': 'new-brand'}`,
      expected_result: `The name field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-002-03',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 브랜드 목록 페이지 진입 → 'Add Brand' 버튼 클릭 → 이름 입력 → 'Save' 버튼 클릭`,
      test_case_name: `브랜드 추가 실패 - 슬러그 필드 누락`,
      input_data: `{'name': 'New Brand', 'slug': ''}`,
      expected_result: `The slug field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-002-04',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 브랜드 목록 페이지 진입 → 'Add Brand' 버튼 클릭 → 이름과 슬러그 입력 (슬러그에 공백 포함) → 'Save' 버튼 클릭`,
      test_case_name: `브랜드 추가 실패 - 슬러그 형식 오류`,
      input_data: `{'name': 'New Brand', 'slug': 'new brand'}`,
      expected_result: `The slug field format is invalid.`
    },
    {
      testcase_id: 'SN-ADMIN-002-01',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 브랜드 목록 페이지 진입 → 특정 브랜드 'Edit' 버튼 클릭 → 이름과 슬러그 수정 → 'Save' 버튼 클릭`,
      test_case_name: `브랜드 수정 성공`,
      input_data: `{'name': 'Updated Brand Name', 'slug': 'updated-brand-slug'}`,
      expected_result: `Brand saved!`
    },
    {
      testcase_id: 'SN-ADMIN-002-02',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 브랜드 목록 페이지 진입 → 특정 브랜드 'Edit' 버튼 클릭 → 이름 필드 비우기 → 'Save' 버튼 클릭`,
      test_case_name: `브랜드 수정 실패 - 이름 필드 누락`,
      input_data: `{'name': '', 'slug': 'valid-slug'}`,
      expected_result: `The name field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-002-03',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 브랜드 목록 페이지 진입 → 특정 브랜드 'Edit' 버튼 클릭 → 슬러그 필드 비우기 → 'Save' 버튼 클릭`,
      test_case_name: `브랜드 수정 실패 - 슬러그 필드 누락`,
      input_data: `{'name': 'Valid Name', 'slug': ''}`,
      expected_result: `The slug field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-002-04',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 브랜드 목록 페이지 진입 → 특정 브랜드 'Edit' 버튼 클릭 → 슬러그에 'invalid slug' 입력 → 'Save' 버튼 클릭`,
      test_case_name: `브랜드 수정 실패 - 슬러그 형식 오류`,
      input_data: `{'name': 'Valid Name', 'slug': 'invalid slug'}`,
      expected_result: `The slug field must only contain letters, numbers, dashes, and underscores.`
    },
    {
      testcase_id: 'SN-ADMIN-002-01',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 브랜드 목록 페이지 진입 → 특정 브랜드의 'Delete' 버튼 클릭 → 삭제 확인`,
      test_case_name: `브랜드 삭제 성공`,
      input_data: `{'admin_email': 'admin@example.com', 'admin_password': 'AdminPassword123!', 'brand_id': 1}`,
      expected_result: `Brand deleted.`
    },
    {
      testcase_id: 'SN-ADMIN-002-02',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `일반 사용자 로그인 → 브랜드 목록 페이지 진입 → 특정 브랜드의 'Delete' 버튼 클릭`,
      test_case_name: `브랜드 삭제 실패 - 권한 없음`,
      input_data: `{'user_email': 'user@example.com', 'user_password': 'UserPassword123!', 'brand_id': 1}`,
      expected_result: `Unauthorized`
    },
    {
      testcase_id: 'SN-ADMIN-002-03',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 브랜드 목록 페이지 진입 → 존재하지 않는 브랜드의 'Delete' 버튼 클릭`,
      test_case_name: `브랜드 삭제 실패 - 존재하지 않는 브랜드`,
      input_data: `{'admin_email': 'admin@example.com', 'admin_password': 'AdminPassword123!', 'brand_id': 99}`,
      expected_result: `The selected id is invalid.`
    },
    {
      testcase_id: 'SN-ADMIN-002-04',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 브랜드 목록 페이지 진입 → 다른 곳에서 사용 중인 브랜드의 'Delete' 버튼 클릭`,
      test_case_name: `브랜드 삭제 실패 - 브랜드가 사용 중`,
      input_data: `{'admin_email': 'admin@example.com', 'admin_password': 'AdminPassword123!', 'brand_id': 2}`,
      expected_result: `Seems like this brand is used elsewhere.`
    },
    {
      testcase_id: 'SN-ADMIN-002-01',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 'Categories' 메뉴 클릭`,
      test_case_name: `카테고리 목록 조회 성공`,
      input_data: `{}`,
      expected_result: `카테고리 목록이 성공적으로 표시됨`
    },
    {
      testcase_id: 'SN-ADMIN-002-02',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 'Categories' 메뉴 클릭 → 검색창에 'Tools' 입력 → 'Search' 버튼 클릭`,
      test_case_name: `카테고리 검색 성공`,
      input_data: `{'query': 'Tools'}`,
      expected_result: `검색된 카테고리 목록이 성공적으로 표시됨`
    },
    {
      testcase_id: 'SN-ADMIN-002-03',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 'Categories' 메뉴 클릭 → 검색창에 아무것도 입력하지 않음 → 'Search' 버튼 클릭`,
      test_case_name: `카테고리 검색 실패 - 검색어 미입력`,
      input_data: `{'query': ''}`,
      expected_result: `The query field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-002-04',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 'Categories' 메뉴 클릭 → 검색창에 'NonExistentCategory' 입력 → 'Search' 버튼 클릭`,
      test_case_name: `카테고리 검색 실패 - 존재하지 않는 카테고리`,
      input_data: `{'query': 'NonExistentCategory'}`,
      expected_result: `검색된 카테고리가 없음`
    },
    {
      testcase_id: 'SN-ADMIN-002-01',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 추가 페이지 진입 → 이름, 슬러그 입력 → 'Save' 버튼 클릭`,
      test_case_name: `카테고리 추가 성공`,
      input_data: `{'name': 'New Category', 'slug': 'new-category'}`,
      expected_result: `Category saved!`
    },
    {
      testcase_id: 'SN-ADMIN-002-02',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 추가 페이지 진입 → 이름을 비워둠 → 슬러그 입력 → 'Save' 버튼 클릭`,
      test_case_name: `카테고리 추가 실패 - 이름 필수 입력`,
      input_data: `{'name': '', 'slug': 'new-category'}`,
      expected_result: `Name is required`
    },
    {
      testcase_id: 'SN-ADMIN-002-03',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 추가 페이지 진입 → 이름 입력 → 슬러그를 비워둠 → 'Save' 버튼 클릭`,
      test_case_name: `카테고리 추가 실패 - 슬러그 필수 입력`,
      input_data: `{'name': 'New Category', 'slug': ''}`,
      expected_result: `Slug is required`
    },
    {
      testcase_id: 'SN-ADMIN-002-04',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 추가 페이지 진입 → 이름 입력 → 슬러그에 'new category' 입력 → 'Save' 버튼 클릭`,
      test_case_name: `카테고리 추가 실패 - 슬러그 형식 오류`,
      input_data: `{'name': 'New Category', 'slug': 'new category'}`,
      expected_result: `Slug cannot contain spaces`
    },
    {
      testcase_id: 'SN-ADMIN-002-05',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 추가 페이지 진입 → 이름 입력 → 이미 존재하는 슬러그 입력 → 'Save' 버튼 클릭`,
      test_case_name: `카테고리 추가 실패 - 슬러그 중복`,
      input_data: `{'name': 'Another Category', 'slug': 'existing-slug'}`,
      expected_result: `A category already exists with this slug.`
    },
    {
      testcase_id: 'SN-ADMIN-002-01',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 목록 페이지 진입 → 특정 카테고리 'Edit' 버튼 클릭 → 'Name'과 'Slug' 수정 → 'Save' 버튼 클릭`,
      test_case_name: `카테고리 수정 성공`,
      input_data: `{'name': 'Updated Category Name', 'slug': 'updated-category-name'}`,
      expected_result: `Category saved!`
    },
    {
      testcase_id: 'SN-ADMIN-002-02',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 목록 페이지 진입 → 특정 카테고리 'Edit' 버튼 클릭 → 'Name' 필드 비우기 → 'Save' 버튼 클릭`,
      test_case_name: `카테고리 수정 실패 - 이름 필드 누락`,
      input_data: `{'name': '', 'slug': 'valid-slug'}`,
      expected_result: `Name is required`
    },
    {
      testcase_id: 'SN-ADMIN-002-03',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 목록 페이지 진입 → 특정 카테고리 'Edit' 버튼 클릭 → 'Slug' 필드 비우기 → 'Save' 버튼 클릭`,
      test_case_name: `카테고리 수정 실패 - 슬러그 필드 누락`,
      input_data: `{'name': 'Valid Name', 'slug': ''}`,
      expected_result: `Slug is required`
    },
    {
      testcase_id: 'SN-ADMIN-002-04',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 목록 페이지 진입 → 특정 카테고리 'Edit' 버튼 클릭 → 'Slug'에 'invalid slug' 입력 → 'Save' 버튼 클릭`,
      test_case_name: `카테고리 수정 실패 - 슬러그 형식 오류`,
      input_data: `{'name': 'Valid Name', 'slug': 'invalid slug'}`,
      expected_result: `Slug cannot contain spaces`
    },
    {
      testcase_id: 'SN-ADMIN-002-01',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 목록 페이지 진입 → 특정 카테고리 선택 → 'Delete' 버튼 클릭`,
      test_case_name: `카테고리 삭제 성공`,
      input_data: `{'admin_email': 'admin@example.com', 'admin_password': 'AdminPassword123!'}`,
      expected_result: `Category deleted successfully`
    },
    {
      testcase_id: 'SN-ADMIN-002-02',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `일반 사용자 로그인 → 카테고리 목록 페이지 진입 → 특정 카테고리 선택 → 'Delete' 버튼 클릭`,
      test_case_name: `카테고리 삭제 실패 - 권한 없음`,
      input_data: `{'user_email': 'user@example.com', 'user_password': 'UserPassword123!'}`,
      expected_result: `Unauthorized`
    },
    {
      testcase_id: 'SN-ADMIN-002-03',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 목록 페이지 진입 → 존재하지 않는 카테고리 ID로 'Delete' 버튼 클릭`,
      test_case_name: `카테고리 삭제 실패 - 존재하지 않는 카테고리`,
      input_data: `{'admin_email': 'admin@example.com', 'admin_password': 'AdminPassword123!', 'category_id': '99'}`,
      expected_result: `The selected id is invalid.`
    },
    {
      testcase_id: 'SN-ADMIN-002-04',
      scenario_id: 'SN-ADMIN-002',
      ui_flow: `관리자 로그인 → 카테고리 목록 페이지 진입 → 사용 중인 카테고리 선택 → 'Delete' 버튼 클릭`,
      test_case_name: `카테고리 삭제 실패 - 카테고리가 사용 중`,
      input_data: `{'admin_email': 'admin@example.com', 'admin_password': 'AdminPassword123!', 'category_id': '1'}`,
      expected_result: `Seems like this category is used elsewhere.`
    },
    {
      testcase_id: 'SN-ADMIN-003-01',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 상품 관리 페이지 진입 → 상품 목록 조회`,
      test_case_name: `상품 목록 조회 성공`,
      input_data: `{}`,
      expected_result: `Products`
    },
    {
      testcase_id: 'SN-ADMIN-003-02',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 상품 관리 페이지 진입 → 검색어 입력 없이 'Search' 버튼 클릭`,
      test_case_name: `상품 검색 실패 - 검색어 미입력`,
      input_data: `{'query': ''}`,
      expected_result: `The query field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-003-03',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 상품 관리 페이지 진입 → 검색어에 'NonExistentProduct' 입력 → 'Search' 버튼 클릭`,
      test_case_name: `상품 검색 실패 - 존재하지 않는 상품 검색`,
      input_data: `{'query': 'NonExistentProduct'}`,
      expected_result: `There are no products found.`
    },
    {
      testcase_id: 'SN-ADMIN-003-01',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 페이지 진입 → 로그인 → 'Add Product' 버튼 클릭 → 상품명, 가격, 카테고리, 브랜드 입력 → 'Save' 버튼 클릭`,
      test_case_name: `상품 추가 성공`,
      input_data: `{'product_name': 'New Product', 'price': '100.00', 'category': 'Electronics', 'brand': 'BrandA'}`,
      expected_result: `Product added successfully`
    },
    {
      testcase_id: 'SN-ADMIN-003-02',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 페이지 진입 → 로그인 → 'Add Product' 버튼 클릭 → 가격, 카테고리, 브랜드 입력 → 'Save' 버튼 클릭`,
      test_case_name: `상품 추가 실패 - 상품명 누락`,
      input_data: `{'product_name': '', 'price': '100.00', 'category': 'Electronics', 'brand': 'BrandA'}`,
      expected_result: `The product_name field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-003-03',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 페이지 진입 → 로그인 → 'Add Product' 버튼 클릭 → 상품명, 가격에 'abc', 카테고리, 브랜드 입력 → 'Save' 버튼 클릭`,
      test_case_name: `상품 추가 실패 - 가격 형식 오류`,
      input_data: `{'product_name': 'New Product', 'price': 'abc', 'category': 'Electronics', 'brand': 'BrandA'}`,
      expected_result: `The price field must be a number.`
    },
    {
      testcase_id: 'SN-ADMIN-003-04',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 페이지 진입 → 로그인 → 'Add Product' 버튼 클릭 → 상품명, 가격, 브랜드 입력 → 'Save' 버튼 클릭`,
      test_case_name: `상품 추가 실패 - 카테고리 누락`,
      input_data: `{'product_name': 'New Product', 'price': '100.00', 'category': '', 'brand': 'BrandA'}`,
      expected_result: `The category field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-003-05',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 페이지 진입 → 로그인 → 'Add Product' 버튼 클릭 → 상품명, 가격, 카테고리 입력 → 'Save' 버튼 클릭`,
      test_case_name: `상품 추가 실패 - 브랜드 누락`,
      input_data: `{'product_name': 'New Product', 'price': '100.00', 'category': 'Electronics', 'brand': ''}`,
      expected_result: `The brand field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-003-01',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 상품 목록 페이지 진입 → 특정 상품의 'Edit' 버튼 클릭 → 상품 정보 수정 → 'Save' 버튼 클릭`,
      test_case_name: `상품 정보 수정 성공`,
      input_data: `{'name': 'Updated Product Name', 'price': '99.99', 'in_stock': '50'}`,
      expected_result: `Product updated successfully`
    },
    {
      testcase_id: 'SN-ADMIN-003-02',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 상품 목록 페이지 진입 → 특정 상품의 'Edit' 버튼 클릭 → 가격에 'abc' 입력 → 'Save' 버튼 클릭`,
      test_case_name: `상품 정보 수정 실패 - 잘못된 가격 형식`,
      input_data: `{'price': 'abc'}`,
      expected_result: `The price field must be a number.`
    },
    {
      testcase_id: 'SN-ADMIN-003-03',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 상품 목록 페이지 진입 → 특정 상품의 'Edit' 버튼 클릭 → 이름 필드 비우기 → 'Save' 버튼 클릭`,
      test_case_name: `상품 정보 수정 실패 - 이름 필드 누락`,
      input_data: `{'name': ''}`,
      expected_result: `The name field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-003-04',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 상품 목록 페이지 진입 → 특정 상품의 'Edit' 버튼 클릭 → 재고에 '-10' 입력 → 'Save' 버튼 클릭`,
      test_case_name: `상품 정보 수정 실패 - 재고 필드 음수 입력`,
      input_data: `{'in_stock': '-10'}`,
      expected_result: `The in_stock field must be at least 0.`
    },
    {
      testcase_id: 'SN-ADMIN-003-05',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 상품 목록 페이지 진입 → 특정 상품의 'Edit' 버튼 클릭 → 이름에 이미 존재하는 상품 이름 입력 → 'Save' 버튼 클릭`,
      test_case_name: `상품 정보 수정 실패 - 중복된 상품 이름`,
      input_data: `{'name': 'Existing Product Name'}`,
      expected_result: `The name has already been taken.`
    },
    {
      testcase_id: 'SN-ADMIN-003-01',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 상품 목록 페이지 진입 → 특정 상품의 'Delete' 버튼 클릭 → 삭제 확인`,
      test_case_name: `상품 삭제 성공`,
      input_data: `{'admin_email': 'admin@example.com', 'admin_password': 'AdminPassword123!', 'product_id': '1'}`,
      expected_result: `Product deleted.`
    },
    {
      testcase_id: 'SN-ADMIN-003-02',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `일반 사용자 로그인 → 상품 목록 페이지 진입 → 특정 상품의 'Delete' 버튼 클릭`,
      test_case_name: `상품 삭제 실패 - 관리자 권한 없음`,
      input_data: `{'user_email': 'user@example.com', 'user_password': 'UserPassword123!', 'product_id': '1'}`,
      expected_result: `{'message': 'Forbidden'}`
    },
    {
      testcase_id: 'SN-ADMIN-003-03',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 상품 목록 페이지 진입 → 특정 상품의 'Delete' 버튼 클릭`,
      test_case_name: `상품 삭제 실패 - 상품이 다른 곳에서 사용 중`,
      input_data: `{'admin_email': 'admin@example.com', 'admin_password': 'AdminPassword123!', 'product_id': '2'}`,
      expected_result: `{'success': False, 'message': 'Seems like this product is used elsewhere.'}`
    },
    {
      testcase_id: 'SN-ADMIN-003-04',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 상품 목록 페이지 진입 → 존재하지 않는 상품의 'Delete' 버튼 클릭`,
      test_case_name: `상품 삭제 실패 - 존재하지 않는 상품`,
      input_data: `{'admin_email': 'admin@example.com', 'admin_password': 'AdminPassword123!', 'product_id': '999'}`,
      expected_result: `{'message': 'Item not found.'}`
    },
    {
      testcase_id: 'SN-ADMIN-003-01',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 'Users List' 페이지로 이동`,
      test_case_name: `이용자 목록 조회 성공`,
      input_data: `{'email': 'admin@example.com', 'password': 'AdminPassword123!'}`,
      expected_result: `Users List`
    },
    {
      testcase_id: 'SN-ADMIN-003-02',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 페이지 진입 → 이메일에 'adminexample.com' 입력 → 비밀번호 입력 → 'Login' 클릭`,
      test_case_name: `이용자 목록 조회 실패 - 잘못된 이메일 형식`,
      input_data: `{'email': 'adminexample.com', 'password': 'AdminPassword123!'}`,
      expected_result: `The email field must be a valid email address.`
    },
    {
      testcase_id: 'SN-ADMIN-003-03',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 페이지 진입 → 이메일 입력 → 비밀번호 입력하지 않음 → 'Login' 클릭`,
      test_case_name: `이용자 목록 조회 실패 - 비밀번호 누락`,
      input_data: `{'email': 'admin@example.com', 'password': ''}`,
      expected_result: `The password field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-003-04',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 페이지 진입 → 이메일 입력 → 잘못된 비밀번호 입력 → 'Login' 클릭`,
      test_case_name: `이용자 목록 조회 실패 - 잘못된 비밀번호`,
      input_data: `{'email': 'admin@example.com', 'password': 'WrongPassword!'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-ADMIN-003-01',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 사용자 관리 페이지 진입 → 'Add New User' 버튼 클릭 → 모든 필드 입력 → 'Submit' 버튼 클릭`,
      test_case_name: `새로운 사용자 추가 성공`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'phone': '1234567890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'Anytown', 'state': 'Anystate', 'country': 'Anyland', 'postal_code': '12345', 'password': 'StrongPassword123!'}`,
      expected_result: `User added successfully`
    },
    {
      testcase_id: 'SN-ADMIN-003-02',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 사용자 관리 페이지 진입 → 'Add New User' 버튼 클릭 → 이메일에 'john.doeexample.com' 입력 → 나머지 필드 입력 → 'Submit' 버튼 클릭`,
      test_case_name: `새로운 사용자 추가 실패 - 이메일 형식 오류`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doeexample.com', 'phone': '1234567890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'Anytown', 'state': 'Anystate', 'country': 'Anyland', 'postal_code': '12345', 'password': 'StrongPassword123!'}`,
      expected_result: `The email field must be a valid email address.`
    },
    {
      testcase_id: 'SN-ADMIN-003-03',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 사용자 관리 페이지 진입 → 'Add New User' 버튼 클릭 → 비밀번호에 'Short1!' 입력 → 나머지 필드 입력 → 'Submit' 버튼 클릭`,
      test_case_name: `새로운 사용자 추가 실패 - 비밀번호 길이 부족`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'phone': '1234567890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'Anytown', 'state': 'Anystate', 'country': 'Anyland', 'postal_code': '12345', 'password': 'Short1!'}`,
      expected_result: `Password must be minimal 6 characters long.`
    },
    {
      testcase_id: 'SN-ADMIN-003-04',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 사용자 관리 페이지 진입 → 'Add New User' 버튼 클릭 → 전화번호에 '123-456-7890' 입력 → 나머지 필드 입력 → 'Submit' 버튼 클릭`,
      test_case_name: `새로운 사용자 추가 실패 - 전화번호 형식 오류`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'phone': '123-456-7890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'Anytown', 'state': 'Anystate', 'country': 'Anyland', 'postal_code': '12345', 'password': 'StrongPassword123!'}`,
      expected_result: `Only numbers are allowed.`
    },
    {
      testcase_id: 'SN-ADMIN-003-05',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 사용자 관리 페이지 진입 → 'Add New User' 버튼 클릭 → 우편번호에 '1234' 입력 → 나머지 필드 입력 → 'Submit' 버튼 클릭`,
      test_case_name: `새로운 사용자 추가 실패 - 우편번호 형식 오류`,
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'phone': '1234567890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'Anytown', 'state': 'Anystate', 'country': 'Anyland', 'postal_code': '1234', 'password': 'StrongPassword123!'}`,
      expected_result: `Only 5 numbers are allowed.`
    },
    {
      testcase_id: 'SN-ADMIN-003-01',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 이용자 목록 페이지 진입 → 특정 이용자 선택 → 수정 페이지 진입 → 필수 정보 입력 → 'Save' 버튼 클릭`,
      test_case_name: `이용자 정보 수정 성공`,
      input_data: `{'first_name': 'UpdatedName', 'last_name': 'Doe', 'dob': '1980-01-01', 'phone': '1234567890', 'email': 'updated@example.com', 'address': {'street': 'Updated Street', 'city': 'Updated City', 'state': 'Updated State', 'country': 'Updated Country', 'postal_code': '5678BB'}}`,
      expected_result: `Settings saved!`
    },
    {
      testcase_id: 'SN-ADMIN-003-02',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 이용자 목록 페이지 진입 → 특정 이용자 선택 → 수정 페이지 진입 → 이메일에 'invalid-email' 입력 → 나머지 필드 입력 → 'Save' 버튼 클릭`,
      test_case_name: `이용자 정보 수정 실패 - 이메일 형식 오류`,
      input_data: `{'email': 'invalid-email'}`,
      expected_result: `The email field must be a valid email address.`
    },
    {
      testcase_id: 'SN-ADMIN-003-03',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 이용자 목록 페이지 진입 → 특정 이용자 선택 → 수정 페이지 진입 → 이름 필드 비워둠 → 나머지 필드 입력 → 'Save' 버튼 클릭`,
      test_case_name: `이용자 정보 수정 실패 - 필수 필드 누락`,
      input_data: `{'first_name': ''}`,
      expected_result: `The first name field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-003-04',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 이용자 목록 페이지 진입 → 특정 이용자 선택 → 수정 페이지 진입 → 전화번호에 'abc123' 입력 → 나머지 필드 입력 → 'Save' 버튼 클릭`,
      test_case_name: `이용자 정보 수정 실패 - 전화번호 형식 오류`,
      input_data: `{'phone': 'abc123'}`,
      expected_result: `Only numbers are allowed.`
    },
    {
      testcase_id: 'SN-ADMIN-003-05',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 이용자 목록 페이지 진입 → 특정 이용자 선택 → 수정 페이지 진입 → 우편번호에 '123' 입력 → 나머지 필드 입력 → 'Save' 버튼 클릭`,
      test_case_name: `이용자 정보 수정 실패 - 우편번호 형식 오류`,
      input_data: `{'address': {'postal_code': '123'}}`,
      expected_result: `Only 5 numbers are allowed.`
    },
    {
      testcase_id: 'SN-ADMIN-003-01',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 사용자 목록 페이지 진입 → 특정 사용자 선택 → 'Delete' 버튼 클릭`,
      test_case_name: `관리자 계정으로 사용자 삭제 성공`,
      input_data: `{'email': 'admin@example.com', 'password': 'AdminPassword123!'}`,
      expected_result: `사용자가 성공적으로 삭제되었습니다.`
    },
    {
      testcase_id: 'SN-ADMIN-003-02',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `일반 사용자 로그인 → 사용자 목록 페이지 진입 → 특정 사용자 선택 → 'Delete' 버튼 클릭`,
      test_case_name: `사용자 삭제 실패 - 관리자 권한 없음`,
      input_data: `{'email': 'user@example.com', 'password': 'UserPassword123!'}`,
      expected_result: `Forbidden`
    },
    {
      testcase_id: 'SN-ADMIN-003-03',
      scenario_id: 'SN-ADMIN-003',
      ui_flow: `관리자 로그인 → 사용자 목록 페이지 진입 → 특정 사용자 선택 → 'Delete' 버튼 클릭`,
      test_case_name: `사용자 삭제 실패 - 사용자가 다른 곳에서 사용 중`,
      input_data: `{'email': 'admin@example.com', 'password': 'AdminPassword123!'}`,
      expected_result: `Seems like this customer is used elsewhere.`
    },
    {
      testcase_id: 'SN-ADMIN-004-01',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 페이지 진입 → 이메일, 비밀번호 입력 → 'Sign in' 버튼 클릭 → 'Statistics' 메뉴 클릭`,
      test_case_name: `통계 정보 조회 성공`,
      input_data: `{'email': 'admin@example.com', 'password': 'AdminPassword123!'}`,
      expected_result: `Statistics`
    },
    {
      testcase_id: 'SN-ADMIN-004-02',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 페이지 진입 → 이메일에 'adminexample.com' 입력 → 비밀번호 입력 → 'Sign in' 버튼 클릭`,
      test_case_name: `통계 정보 조회 실패 - 잘못된 이메일 형식`,
      input_data: `{'email': 'adminexample.com', 'password': 'AdminPassword123!'}`,
      expected_result: `Email format is invalid`
    },
    {
      testcase_id: 'SN-ADMIN-004-03',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 페이지 진입 → 이메일 입력 → 비밀번호 입력하지 않음 → 'Sign in' 버튼 클릭`,
      test_case_name: `통계 정보 조회 실패 - 비밀번호 누락`,
      input_data: `{'email': 'admin@example.com', 'password': ''}`,
      expected_result: `Password is required`
    },
    {
      testcase_id: 'SN-ADMIN-004-04',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 페이지 진입 → 이메일 입력하지 않음 → 비밀번호 입력 → 'Sign in' 버튼 클릭`,
      test_case_name: `통계 정보 조회 실패 - 이메일 누락`,
      input_data: `{'email': '', 'password': 'AdminPassword123!'}`,
      expected_result: `Email is required`
    },
    {
      testcase_id: 'SN-ADMIN-004-05',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 페이지 진입 → 이메일, 비밀번호 입력 → 'Sign in' 버튼 클릭`,
      test_case_name: `통계 정보 조회 실패 - 잘못된 비밀번호`,
      input_data: `{'email': 'admin@example.com', 'password': 'WrongPassword!'}`,
      expected_result: `Invalid email or password`
    },
    {
      testcase_id: 'SN-ADMIN-004-01',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 → 메시지 관리 페이지 진입 → 특정 메시지 선택 → 상태 변경 → 'Reply' 버튼 클릭 → 메시지 입력 → 'Reply' 버튼 클릭`,
      test_case_name: `메시지 관리 성공`,
      input_data: `{'status': 'IN_PROGRESS', 'message': 'Thank you for reaching out. We are looking into your issue.'}`,
      expected_result: `Category saved!`
    },
    {
      testcase_id: 'SN-ADMIN-004-02',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 → 메시지 관리 페이지 진입 → 특정 메시지 선택 → 상태 변경 없이 'Reply' 버튼 클릭`,
      test_case_name: `메시지 관리 실패 - 상태 미선택`,
      input_data: `{'status': ''}`,
      expected_result: `The status field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-004-03',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 → 메시지 관리 페이지 진입 → 특정 메시지 선택 → 상태 변경 → 'Reply' 버튼 클릭 → 메시지 입력 없이 'Reply' 버튼 클릭`,
      test_case_name: `메시지 관리 실패 - 메시지 미입력`,
      input_data: `{'message': ''}`,
      expected_result: `The message field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-004-04',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 → 메시지 관리 페이지 진입 → 특정 메시지 선택 → 잘못된 상태 선택 → 'Reply' 버튼 클릭`,
      test_case_name: `메시지 관리 실패 - 잘못된 상태 선택`,
      input_data: `{'status': 'INVALID_STATUS'}`,
      expected_result: `The selected status is invalid.`
    },
    {
      testcase_id: 'SN-ADMIN-004-01',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 → 메시지 관리 페이지 진입 → 메시지 입력 → 'Reply' 버튼 클릭`,
      test_case_name: `메시지 전송 성공`,
      input_data: `{'message': 'This is a test message for the admin.'}`,
      expected_result: `Thanks for your message! We will contact you shortly.`
    },
    {
      testcase_id: 'SN-ADMIN-004-02',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 → 메시지 관리 페이지 진입 → 메시지 입력 없이 'Reply' 버튼 클릭`,
      test_case_name: `메시지 전송 실패 - 메시지 필드 비어있음`,
      input_data: `{'message': ''}`,
      expected_result: `The message field is required.`
    },
    {
      testcase_id: 'SN-ADMIN-004-03',
      scenario_id: 'SN-ADMIN-004',
      ui_flow: `관리자 로그인 → 메시지 관리 페이지 진입 → 10자 미만 메시지 입력 → 'Reply' 버튼 클릭`,
      test_case_name: `메시지 전송 실패 - 메시지 길이 부족`,
      input_data: `{'message': 'Short'}`,
      expected_result: `Message must be minimal 50 characters`
    },
  ];