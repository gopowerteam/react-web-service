/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '~/core/http'
import { Observable } from 'rxjs'
import { MuleProjectCreationController } from '~/config/services/mule-project-creation.controller'

export class MuleProjectCreationService {
    /**
     * generate Mule code
     */
    @Request({
        server: MuleProjectCreationController.post
    })
    public post(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
