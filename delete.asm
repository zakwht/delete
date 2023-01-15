.cseg
	
start:
        mov ebx, fn
        mov eax, 10
        int 0x80

done:   jmp done
			
.dseg
fn		  db 'input.txt',0
