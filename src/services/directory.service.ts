/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '~/core/http'
import { Observable } from 'rxjs'
import { DirectoryController } from '~/config/services/directory.controller'

export class DirectoryService {
    /**
     * 获取全部数据字典
     */
    @Request({
        server: DirectoryController.directories
    })
    public directories(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 获取数据字典
     */
    @Request({
        server: DirectoryController.getDirectoryByType
    })
    public getDirectoryByType(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
