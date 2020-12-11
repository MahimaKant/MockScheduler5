import React, { useRef } from 'react';
import './Signup.css';
import Button from 'react-bootstrap/Button';
import {useForm} from "react-hook-form";
import { Input, Label, Form, FormGroup } from 'reactstrap';
import { render } from '@testing-library/react';



function Signup()
{
    const { register, errors, handleSubmit, watch } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async data => {
      alert(JSON.stringify(data));
    };
    
    
    
    
    return( <body >
      <div class="middle">
        <div class='main'>
    
            <h1 class='head_1'>Let's Sign Up</h1>
            <Form >
                        
                            <label class="lab" for="first_name">First Name</label>
                            <input class="input" type="text" name="first_name" id="first_name" 
                                 />
                        
    
                           <label class="lab" for="last_name">Last Name</label>
                            <input class="input" type="text" name="last_name" id="last_name" 
                                />
                        
    
                        
                            <label class="lab" for="email">Email</label>
                            <input class="input" type="text" name="email" id="email" 
                                />
                        
    
                        
                            <label class="lab" for="gender">Gender</label>
                            <input class="input"  type="text" name="gender" id="gender" 
                                />
                           <label class="lab">Catagory</label>
                        <div>
                        
                            <input type="radio" id="Alumni" name="Catagory" value="Alumni"/>
                             <label for="Alumni">Alumni</label>
                             <input type="radio" id="Student" name="Catagory" value="Student"/>
                             <label for="Student">Student</label>
                          </div>

                          <label class="lab" for="Job/Course">Job/Course</label>
                            <input class="input" type="text" name="mobileno" id="mobileno" 
                                 />
                       
                        <FormGroup>
                        <label class="lab">Password</label>
                           <input class="input"
                           name="password"
                           type="password"
                           ref={register({
                             required: "You must specify a password",
                             minLength: {
                               value: 8,
                               message: "Password must have at least 8 characters"
                             }
                           })}
                         />
                         {errors.password && <p>{errors.password.message}</p>}

                         <label class="lab">Repeat password</label>
                         <input class="input"
                           name="password_repeat"
                           type="password"
                           ref={register({
                             validate: value =>
                               value === password.current || "The passwords do not match"
                           })}
                         />
                         {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

                         <label class="lab" for="mobileno">Mobile Number</label>
                         <input class="input" type="text" name="mobileno" id="mobileno" 
                                 />

                     <input type="submit" onClick={handleSubmit(onSubmit)} />
                         

                                             </FormGroup>
                                 
            </Form>
    </div>
    </div>
    </body>    );

}
export default Signup;
