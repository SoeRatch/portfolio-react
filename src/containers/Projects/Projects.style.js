import styled from 'styled-components';

  import {blue} from '../../theme/variables';

export const Card = styled.div`
	 background: #fff;
  border-radius: 2px;
  display: inline-block;
  float:left;
  height: 430px;
  margin: 1rem;
  position: relative;
  width: 340px;
  z-index:-2;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
 
  margin-top: 2px;
  padding: 3px;
  opacity:0.8px;

 h4{
 
  font-family: 'Zilla Slab Highlight', cursive;
  font-size:25px;
 }

 h5{
 	color: ${blue};
 	padding:2px;
 }
p{
	padding:2px;
   font-family: 'Cabin Sketch', cursive;
  font-size:20px;
}

  &:hover {
				box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
				transition: transform .3s;

			}
    
	`;

export const Contain = styled.div`
	 
  margin-top: 100px;
  margin-left: 60px;
  margin-right: 0;
  padding: 3px;

			}
    
	`;